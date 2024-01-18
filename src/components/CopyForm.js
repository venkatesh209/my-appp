import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateText, updateStyle } from "../redux/action";

const { Option } = Select;

const CopyForm = () => {
    const dispatch = useDispatch();
    const { headline, subheadline, body, font, color } = useSelector((state) => state);
    const [loading, setLoading] = useState(false);

    const handleTextChange = (field, value) => {
        dispatch(updateText({ [field]: value }));
    };

    const handleStyleChange = (field, value) => {
        dispatch(updateStyle({ [field]: value }));
    };

    const handleGenerate = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();

            dispatch(updateText({ headline: data.title, body: data.body }));
            message.success('Generated from API successfully!');
        } catch (error) {
            console.error('Error fetching data:', error);
            message.error('Failed to generate from API.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form layout="vertical">
            <Form.Item label="Headline">
                <Input value={headline} onChange={(e) => handleTextChange('headline', e.target.value)} />
            </Form.Item>
            <Form.Item label="Subheadline">
                <Input value={subheadline} onChange={(e) => handleTextChange('subheadline', e.target.value)} />
            </Form.Item>
            <Form.Item label="Body Copy">
                <Input.TextArea value={body} onChange={(e) => handleTextChange('body', e.target.value)} />
            </Form.Item>
            <Form.Item label="Font">
                <Select value={font} onChange={(value) => handleStyleChange('font', value)}>
                    <Option value="Arial">Arial</Option>
                    <Option value="Times New Roman">Times New Roman</Option>
                    <Option value="Times New Roman">Times New Roman</Option>
                    <Option value="Times New Roman">Times New Roman</Option>
                    <Option value="Times New Roman">Times New Roman</Option>
                    <Option value="Times New Roman">Times New Roman</Option>
                    <Option value="Times New Roman">Times New Roman</Option>
                    <Option value="Times New Roman">Times New Roman</Option>
                    <Option value="Times New Roman">Times New Roman</Option>

                </Select>
            </Form.Item>
            <Form.Item label="Text Color">
                <Select value={color} onChange={(value) => handleStyleChange('color', value)} >
                <Option value="Red">Red</Option>
                <Option value="Blue">Blue</Option>
                <Option value="Black">Black</Option>
                <Option value="Green">Green</Option>
                <Option value="Pink">Pink</Option>
</Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={handleGenerate} loading={loading}>
                    Generate from API
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CopyForm;

