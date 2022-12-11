import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ReplayIcon from "@mui/icons-material/Replay";
import { ComponentProps } from "react";
import { CameraPresenter } from "../Camera/presenter";

type Props = {
  onSaveImage: () => void;
} & Pick<
  ComponentProps<typeof CameraPresenter>,
  "captureImageDataUri" | "onClearCaptureImage"
>;

export const CameraCaptureResultPresenter: React.FC<Props> = ({
  captureImageDataUri,
  onClearCaptureImage,
  onSaveImage,
}) => {
  return (
    <>
      <img src={captureImageDataUri} className="screenshot" alt="Screenshot" />
      <div className="absolute-btns">
        <button className="camera-btn" onClick={onSaveImage}>
          <LocalPrintshopIcon fontSize="inherit" />
        </button>
        <button className="camera-btn" onClick={onClearCaptureImage}>
          <ReplayIcon fontSize="inherit" />
        </button>
      </div>
    </>
  );
};
