"use client"; // Ensure this runs on the client side
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const SmoothScroll = () => {
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: target.offsetTop,
                        ease: 'power2.out',
                        scrub: 2
                    });
                }
            });
        });

        // Clean up the event listeners on component unmount
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', () => {});
            });
        };
    }, []);

    return null; // This component doesn't render anything
};

export default SmoothScroll;
