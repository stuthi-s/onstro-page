"use client"
import { Form, Input, Button } from "antd";
import Image from "next/image";

const BusinessSection = () => {
  const onFinish = (values: { name: string; email: string; message: string }) => {
    console.log("Form Submitted:", values);
  };

  return (
    <section className="container mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 bg-blue-50 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 text-center lg:text-left">
            Contact Us
          </h2>
          <p className="text-blue-950 text-lg text-center lg:text-left">
            Get in touch to start your Enterprise Agility journey. We are here to help!
          </p>

          {/* Locations */}
          {[
            {
              country: "Lisbon, Portugal",
              address: "Rua Campos Júnior, nº 1 A 1070-306 Lisboa",
              icon: "/icons/portugal_flag.png",
            },
            {
              country: "Goa, India",
              address: "S-146, Verna Industrial Estate, Verna, Goa - 403722",
              icon: "/icons/india_flag.png",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Image src={item.icon} alt={item.country} width={35} height={35} className="mb-4" />
              <div>
                <p className="text-gray-700 text-lg font-semibold">{item.country}</p>
                <p className="text-gray-700 text-lg">{item.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10">
          <Form layout="vertical" onFinish={onFinish} className="space-y-6">
            <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input placeholder="Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-950" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-950" />
            </Form.Item>

            <Form.Item name="message" rules={[{ required: true, message: "Please enter your message" }]}>
              <Input.TextArea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-950"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-950 hover:bg-blue-900 text-white py-5 rounded-lg font-semibold transition"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;