import { ChromePicker } from 'react-color';
import { FaFont, FaPaintBrush } from 'react-icons/fa';
import { useState , useRef, useEffect } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";


const FontColorControls = ({setSettingActive ,  selectedFont, setSelectedFont, fonts, color, setColor , isSettingActive}) => {

    const [showColorPicker, setShowColorPicker] = useState(false);

    const fontcontrolRef = useRef(null)

    const handleColorClick = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleColorChangeComplete = (color) => {
        setColor(color.hex);
        // setShowColorPicker(false); // Close color picker after selecting color
    };
    useEffect(() => {
        fontcontrolRef.current.style.right = isSettingActive ? "50px" : "-400px";
    }, [isSettingActive]);

    return (
        <div className="font-color-controls" ref={fontcontrolRef}>
            <div className="control-group">
                <label htmlFor="font-select" className="control-label">
                    <FaFont /> Change Font and color
                    <span onClick={() =>setSettingActive(false)}>
                        <IoCloseCircleOutline/>
                    </span>
                </label>
                <div className="font-setting">
                    <div className="color-picker-container">
                        <div
                            className="color-square"
                            style={{ backgroundColor: color }}
                            onClick={handleColorClick}
                        />
                        {showColorPicker && (
                            <ChromePicker
                                color={color}
                                onChangeComplete={handleColorChangeComplete}
                                className="color-picker"
                            />
                        )}
                    </div>
                    <select
                        id="font-select"
                        className="font-select"
                        value={selectedFont}
                        onChange={(e) => setSelectedFont(e.target.value)}
                    >
                        {fonts.map((font) => (
                            <option key={font.family} value={font.family}>
                                {font.family}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
};

export default FontColorControls;
