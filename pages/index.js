import Head from 'next/head';
import Image from 'next/image';
import FilterBar from '../components/filter-bar';
import Products from '../components/results';

export default function Home() {
  return (
    <div className="w-full h-full flex relative">
      <Products />
    </div>
  );
}
