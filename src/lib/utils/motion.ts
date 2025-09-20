import { MotionProps } from "framer-motion"

export namespace MotionAnimation {
    export const defaultViewport: MotionProps["viewport"] = {
        once: true,
        amount: 0.2,
    }

    export const fadeInVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    }

    export const slideInVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
    }

    export const fadeJumpVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: [0.8, 1.1, 1],
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    }

    export const fadeUpVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    }

    export const fadeDownVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    }

    export const sobeDesceVariant = {
        initial: { y: 0 },
        animate: {
            y: [0, 15, 0],
            transition: {
                duration: 3,
                ease: "easeInOut" as const,
                repeat: Infinity,
            },
        },
    }
}
