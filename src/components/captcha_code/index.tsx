import { TextInput } from "@mantine/core";
import { getCaptcha } from "../../service";
import { useState, useEffect, FC } from "react";
import { Tooltip } from "@mantine/core";

interface CaptchaCodeProps {
  getCaptchaCode: (code: string) => void;
}

const CaptchaCode: FC<CaptchaCodeProps> = ({ getCaptchaCode }) => {
  const [captcha, setCaptcha] = useState<string>("");

  useEffect(() => {
    setCaptcha(getCaptcha());
  }, []);

  return (
    <div className="flex gap-2 items-end">
      <TextInput
        label="验证码"
        className="flex-1"
        onChange={(e) => {
          getCaptchaCode(e.target.value);
        }}
      />
      <Tooltip label="点击更换" position="bottom" withArrow>
        <img
          src={captcha}
          alt="captcha"
          onClick={() => {
            setCaptcha(getCaptcha());
          }}
        />
      </Tooltip>
    </div>
  );
};

export default CaptchaCode;
