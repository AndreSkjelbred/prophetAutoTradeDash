import { useEffect, useRef } from "react";
import { config } from "../../config";

const TelegramButton = ({ onResponse }) => {
  const buttonContainer = useRef(null);

  useEffect(() => {
    if (!buttonContainer?.current) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", config.TG_BOT_NAME);
    script.setAttribute("data-size", "large");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-userpic", "false");

    buttonContainer.current.appendChild(script);

    window.onTelegramAuth = function (user) {
      onResponse(user);
    };
  }, [buttonContainer, onResponse]);

  return <div ref={buttonContainer}></div>;
};

export default TelegramButton;
