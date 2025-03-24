"use client";
import React from "react";
import { Form, Input, Button, message } from "antd";

const ContactForm = () => {
  const onFinish = (values: { name: string; email: string; message: string }) => {
    console.log("Form Submitted:", values);
    message.success("Your message has been sent successfully!");
  };

  return (
    <div className="container rounded-3xl mx-auto px-12 py-16 mb-20 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white sm:px-6 lg:px-8">
      <h2 className="text-4xl font-semibold text-center text-gray-900">
        Start Optimizing Your Business with Onstro
      </h2>
      <p className="text-center text-gray-600 mt-4 text-xl">
        Need help to transform your business with Enterprise Agility? Get in touch for a free 30-minute consultation!
      </p>
      <div className="mt-8 w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h3 className="text-lg font-semibold text-center text-gray-900">Get In Touch</h3>
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
      </div>
    </div>
  );
};

export default ContactForm;