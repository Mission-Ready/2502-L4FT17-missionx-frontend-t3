import React from "react"; // Import React library
import styles from "./ImageModal.module.css"; // Import CSS styles for the modal

// ImageModal functional component
const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  // If the modal is not open, return null (don't render anything)
  if (!isOpen) return null; 

  return (
    // Overlay for the modal; clicking it will close the modal
    <div className={styles.modalOverlay} onClick={onClose}>
      {/* Content area of the modal; prevent click events from propagating to the overlay */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Close button to close the modal */}
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        {/* Enlarged image */}
        <img src={imageSrc} alt="Enlarged" className={styles.enlargedImage} />
      </div>
    </div>
  );
};

// Export the ImageModal component for use in other files
export default ImageModal;



