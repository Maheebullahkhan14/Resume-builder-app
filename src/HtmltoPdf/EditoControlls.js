import { ChromePicker } from 'react-color';
import { FaFont, FaPaintBrush } from 'react-icons/fa';
import { useState } from 'react';

const FontColorControls = ({ selectedFont, setSelectedFont, fonts, color, setColor }) => {

    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleColorClick = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleColorChangeComplete = (color) => {
        setColor(color.hex);
        // setShowColorPicker(false); // Close color picker after selecting color
    };

    return (
        <div className="font-color-controls">
            <div className="control-group">
                <label htmlFor="font-select" className="control-label">
                    <FaFont /> Font
                </label>
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
            <div className="control-group">
                <label className="control-label">
                    <FaPaintBrush /> Color
                </label>
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
            </div>
        </div>
    )
};

export default FontColorControls;
