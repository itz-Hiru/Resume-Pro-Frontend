import html2canvas from "html2canvas";
import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
  return regex.test(password);
};

export const getLightColorFromImage = (imageUrl) => {
  return new Promise((resolve, reject) => {
    if (!imageUrl || typeof imageUrl !== "string") {
      return reject(new Error("Invalid image URL."));
    }

    const img = new Image();

    if (!imageUrl.startsWith("data")) {
      img.crossOrigin = "anonymous";
    }

    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      let r = 0,
        g = 0,
        b = 0,
        count = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        const red = imageData[i];
        const green = imageData[i + 1];
        const blue = imageData[i + 2];
        const brightness = (red + green + blue) / 3;

        if (brightness > 180) {
          r += red;
          g += green;
          b += blue;
          count++;
        }
      }

      if (count === 0) {
        resolve("#FFFFFF");
      } else {
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        resolve(`rgb(${r}, ${g}, ${b})`);
      }
    };

    img.onerror = (e) => {
      console.error("Failed to load image: ", e);
      reject(new Error("Image could not be loaded or is blocked by CORS"));
    };
  });
};

export function formatYearMonth(yearMonth) {
  return yearMonth ? moment(yearMonth, "YYYY-MM").format("MMM YYYY") : "";
}

export const fixTailwindColors = (element) => {
  const elements = element.querySelectorAll("*");

  elements.forEach((el) => {
    const style = window.getComputedStyle(el);

    ["color", "backgroundColor", "borderColor"].forEach((prop) => {
      const value = style.getPropertyValue(prop);

      if (value.includes("oklch")) {
        el.style[prop] = "#000";
      }
    });
  });
};

// Convert component to image
export async function captureElementAsImage(element) {
  if (!element) throw new Error("No element provided");

  const canvas = await html2canvas(element);
  return canvas.toDataURL("image/png");
}

// Utility to convert base64 data URL to a File object
export const dataURLtoFile = (dataUrl, fileName) => {
  const array = dataUrl.split(",");
  const mime = array[0].match(/:(.*?);/)[1];
  const bstr = atob(array[1]);
  let n = bstr.length;
  const u8array = new Uint8Array(n);

  while (n--) {
    u8array[n] = bstr.charCodeAt(n);
  }

  return new File([u8array], fileName, { type: mime });
}
