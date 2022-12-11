import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { CameraPresenter } from ".";
import { Layout } from "../../layout/Layout";

export const Camera: React.FC = () => {
  const [captureImageDataUri, setCaptureImageDataUri] = useState<string>();
  const [cameraWidth] = useState<number>(1920);
  const [cameraHeight] = useState<number>(1020);
  const [cameraNoiseSuppression] = useState<boolean>(true);
  const webcamRef = useRef<Webcam>(null);

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter === 0) {
      const imageSrc = webcamRef.current?.getScreenshot();
      imageSrc && setCaptureImageDataUri(imageSrc);
    } else {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter, webcamRef]);

  const handleCapture = useCallback(() => {
    setCounter(3);
  }, []);

  const handleClearCaptureImage = () => {
    setCaptureImageDataUri(undefined);
  };

  const videoConstraints: MediaTrackConstraints = {
    width: cameraWidth,
    height: cameraHeight,
    facingMode: "user",
    noiseSuppression: cameraNoiseSuppression,
  };

  return (
    <Layout>
      {counter > 0 && <div className="countdown">{counter}</div>}
      <CameraPresenter
        webcamRef={webcamRef}
        videoConstraints={videoConstraints}
        captureImageDataUri={captureImageDataUri}
        onCapture={handleCapture}
        onClearCaptureImage={handleClearCaptureImage}
      />
    </Layout>
  );
};
