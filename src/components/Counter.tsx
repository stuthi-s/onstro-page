"use client";
import { motion } from "framer-motion";
import Image from "next/image"
import { useEffect, useState } from "react";

type CounterProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon: string;
}

const Counter = (props: CounterProps) => {
  const { value, label, prefix = "", suffix = "+", icon } = props
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 200; 
    const incrementTime = (duration / end) * 10;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer)
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div 
      className="flex flex-col items-center p-2 justify-center m-6">
        <Image src = {icon} alt="Icon" width={48} height={48} className="mb-3 object-contain border border-gray-300 rounded-lg p-2" />
      <motion.div 
        className="text-4xl font-bold text-gray-900">
        {prefix}{count}{suffix}
      </motion.div>
      <p className="text-gray-600 text-center">{label}</p>
    </motion.div>
  )
}

export default Counter