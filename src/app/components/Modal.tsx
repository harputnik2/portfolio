import { motion } from "framer-motion";
import { X } from "react-feather";

type Props = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    title: string;
    content: string;
    link: string;
};

export const Modal = ({ visible, setVisible, title, content, link }: Props) => {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full"
            >
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                    onClick={() => setVisible(false)}
                >
                    <X />
                </button>
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <p className="text-gray-700">{content}</p>
                <div className="mt-4">
                    <a
                        href={link}
                        onClick={() => setVisible(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Open Link
                    </a>
                </div>
            </motion.div>
        </div>
    );
};
