import { motion } from "framer-motion";
import { X } from "react-feather";

type Props = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    title: string;
    content: string;
    illustration: string;
    link: string;
};

export const Modal = ({ visible, setVisible, title, content, illustration, link }: Props) => {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-black text-white p-12 rounded-lg shadow-lg relative max-w-2xl w-full border border-2 border-beetroot"
            >
                <button
                    className="absolute top-6 right-6 text-white"
                    onClick={() => setVisible(false)}
                >
                    <X size={32} className='hover:scale-110' />
                </button>
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <p className="text-white leading-8">{content}</p>
                <img src={illustration} alt={title} className="w-full mt-8" />
                <div className="mt-12">
                    <a
                        href={link}
                        onClick={() => setVisible(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-beetroot w-full block text-center text-white px-4 py-2 rounded hover:darken transition"
                    >
                        See Project
                    </a>
                </div>
            </motion.div>
        </div>
    );
};
