import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { saveAs } from 'file-saver';
import pdfFile from '../assets/CV/Salvador Resume 2023 15-05-2023.pdf';

export default function curriculum() {
  const handleDownloadClick = () => {
    try {
      saveAs(pdfFile, 'Salvador Resume 2023 15-05-2023.pdf');
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <div style={{ position: 'fixed', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleDownloadClick}
      >
        <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Download CV
      </button>
    </div>
  );
}
