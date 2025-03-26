"use client";
import React from "react";
import { Form, Input, Button, message } from "antd";

const ContactForm = () => {
  const onFinish = (values: { name: string; email: string; message: string }) => {
    console.log("Form Submitted:", values);
    message.success("Your message has been sent successfully!");
  };

  return (
        <Form layout="vertical" onFinish={onFinish} className="mt-6 space-y-4">
          <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="message" rules={[{ required: true, message: "Please enter your message" }]}>
            <Input.TextArea placeholder="Message" />
          </Form.Item>

          <Button type="primary" htmlType="submit" className= "w-full bg-blue-950 text-white py-3 rounded-lg font-semibold">
            Submit
          </Button>
        </Form>
  )
}

export default ContactForm