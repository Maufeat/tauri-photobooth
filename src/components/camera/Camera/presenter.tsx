import CameraIcon from "@mui/icons-material/Camera";
import Webcam from "react-webcam";
import { CameraCaptureResult } from "../CameraCaptureResult";

type Props = {
  webcamRef: React.RefObject<Webcam>;
  captureImageDataUri?: string;
  videoConstraints?: boolean | MediaTrackConstraints;
  onCapture: () => void;
  onClearCaptureImage: () => void;
};

export const CameraPresenter: React.FC<Props> = ({
  webcamRef,
  captureImageDataUri,
  videoConstraints,
  onCapture,
  onClearCaptureImage,
}) => {
  return (
    <div>
      <div>
        <Webcam
          ref={webcamRef}
          className="webcam"
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="absolute-btns">
        <button className="camera-btn" onClick={onCapture}>
          <CameraIcon fontSize="inherit" />
        </button>
      </div>

      {captureImageDataUri && (
        <div className="camera-capture-result">
          <CameraCaptureResult
            captureImageDataUri={captureImageDataUri}
            onClearCaptureImage={onClearCaptureImage}
          />
        </div>
      )}
    </div>
  );
};
