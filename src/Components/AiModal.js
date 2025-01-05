import Modal from "react-bootstrap/Modal";
import { aiBanner } from "../Assets";
import { IoSearchOutline } from "react-icons/io5";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { postRequestOptions } from "../constants";
import AiLoader from "./AiLoader";

const AiModal = ({ show, setshow }) => {
    const [promptQuery, setPromptQuery] = useState("");
    const [promptContent, setPromptContent] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [contentLoading, setContentLoading] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL;

    const generatePrompt = async () => {
        if (promptQuery) {
            const apiUrl = `api/ai-prompt`;
            const infoData = { prompt: promptQuery };

            postRequestOptions.body = JSON.stringify(infoData);
            setContentLoading(true);
            try {
                const response = await fetch(`${API_URL}/${apiUrl}`, postRequestOptions);
                if (!response.ok) {
                    const errorResponse = await response.json();
                    toast.error(errorResponse.msg);
                    return;
                }
                const res = await response.json();
                setContentLoading(false);
                setPromptContent(res);
                setIsAnimating(true); // Trigger animation
            } catch (error) {
                console.log(error);
                setContentLoading(false);
            }
        }
    };

    useEffect(() => {
        if (promptContent) {
            // Reset animation state after content is set
            setIsAnimating(false);
        }
    }, [promptContent]);



    const RenderText = () => {
        // Extract the text from the promptContent
        const content = promptContent?.response?.[0]?.content?.parts?.[0]?.text;

        // Split the content into lines
        const lines = content.split('\n');

        return (
            <div className={`fade-down ${isAnimating ? 'fade-down' : 'fade-down-active'}`}>
                {lines.map((line, index) => {
                    // Check if the line is a heading (e.g., starts with '##')
                    if (line.startsWith("## ")) {
                        // Render as a heading
                        return <h2 key={index}>{line.replace("## ", "")}</h2>;
                    } else {
                        // Render as a paragraph
                        return <p key={index}>{line}</p>;
                    }
                })}
            </div>
        );
    };



    return (
        <Modal
            size="lg"
            show={show}
            onHide={() => setshow(false)}
            className="custom-modal"
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <div className="ai-modal-header"></div>
            <Modal.Body className="ai-modal-body">
                <div className="ai-modal-main-cover-wrapper">
                    {contentLoading ? <AiLoader /> : (
                        promptContent ? (
                            <RenderText />
                        ) : (
                            <div className="ai-modal-banner-cover">
                                <img src={aiBanner} alt="ai banner" />
                            </div>
                        )
                    )}
                    <div className="search-ai-prompt-cover-wrapper">
                        <textarea
                            rows={4}
                            placeholder="Add prompt"
                            onChange={(e) => setPromptQuery(e.target.value)}
                        />
                        <button disabled={!promptQuery} onClick={generatePrompt}>
                            <span><IoSearchOutline /></span> 
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AiModal;
