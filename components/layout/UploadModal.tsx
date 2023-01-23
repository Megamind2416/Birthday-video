import Modal from "@/components/shared/modal";
import {
    useState,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
  } from "react";

  const UploadModal  = ({
    showUploadModal,
    setShowUploadModal,
  }: {
    showUploadModal: boolean;
    setShowUploadModal: Dispatch<SetStateAction<boolean>>;
  }) => {
    const [submitClicked, setSubmitClicked] = useState(false);

    return (
        <Modal showModal={showUploadModal} setShowModal={setShowUploadModal}>
          <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
              <h3 className="font-display text-2xl font-bold">Celebrate your loved ones.</h3>
              <p className="text-sm text-gray-500">
                Select desired videos
                <input className="w-52 bg-white shadow rounded" type='file' id='files' multiple />
              </p>
              <button className="h-8 px-6 font-semibold rounded-md bg-black text-white" type="submit" onClick={() => {
                  setSubmitClicked(true)}} >Submit</button>
            </div>
    
            <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
            </div>
          </div>
        </Modal>
      );
    };

    export function useUploadModal() {
        const [showUploadModal, setShowUploadModal] = useState(false);
      
        const UploadModalCallback = useCallback(() => {
          return (
            <UploadModal
              showUploadModal={showUploadModal}
              setShowUploadModal={setShowUploadModal}
            />
          );
        }, [showUploadModal, setShowUploadModal]);
      
        return useMemo(
          () => ({ setShowUploadModal, UploadModal: UploadModalCallback }),
          [setShowUploadModal, UploadModalCallback],
          );
        }
        