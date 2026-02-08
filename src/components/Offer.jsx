import React, { useEffect } from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { Gift, CheckCircle2 } from 'lucide-react';
import Testimonials from './Testimonials';

const Offer = ({ onNext }) => {
    const { title, text, bonuses, button, sectionHeader } = copy.offer;

    useEffect(() => {
        if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
            const script = document.createElement('script');
            script.src = "https://fast.wistia.com/player.js";
            script.async = true;
            document.body.appendChild(script);
        }

        if (!document.querySelector('script[src*="jhnp0kvf2f.js"]')) {
            const script = document.createElement('script');
            script.src = "https://fast.wistia.com/embed/jhnp0kvf2f.js";
            script.async = true;
            script.type = "module";
            document.body.appendChild(script);
        }
    }, []);

    return (
        <StepLayout>
            {/* Main Title - Blue & Bold */}
            <h2 className="text-center mb-4 leading-tight text-primary font-bold text-2xl md:text-3xl px-2">
                {title}
            </h2>

            {/* VSL Video */}
            <div className="w-full max-w-[320px] md:max-w-[360px] mx-auto mb-8 rounded-xl overflow-hidden shadow-lg border-2 border-[#0284c7]">
                <wistia-player media-id="jhnp0kvf2f" aspect="0.5625"></wistia-player>
            </div>

            {/* Subtitle Text */}
            <p className="mb-8 text-center text-text-main px-4 leading-relaxed">
                {text}
            </p>

            {/* Section Header - Bold Black */}
            <h4 className="text-center font-bold text-text-highlight mb-6 text-lg">
                {sectionHeader}
            </h4>

            {/* Bonuses List - Clean Layout */}
            <div className="mb-8 px-2">
                <ul className="space-y-6">
                    {bonuses.map((bonus, index) => (
                        <li key={index} className="flex items-start gap-3">
                            {/* Green Check Icon */}
                            <span className="text-success mt-1 flex-shrink-0">
                                <CheckCircle2 size={28} className="stroke-[2px]" />
                            </span>

                            {/* Text Content */}
                            <div className="text-left">
                                <h5 className="text-primary font-bold text-lg leading-tight mb-1">
                                    {bonus.title}
                                </h5>
                                <p className="text-text-main text-sm leading-normal m-0">
                                    {bonus.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mexican Testimonials Section */}
            <Testimonials />

            <button className="btn w-full btn-primary animate-pulse font-bold text-lg py-4" onClick={onNext}>
                {button}
            </button>
        </StepLayout>
    );
};

export default Offer;
