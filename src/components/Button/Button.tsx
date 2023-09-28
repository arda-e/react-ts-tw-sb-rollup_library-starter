import React, { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface IButtonProps {
    text: string;
    variant: ButtonVariant;
    children?: ReactNode;
}

const Button = ({
    text,
    variant,
    children
}: IButtonProps) => {
    return (
        <>
            <div className="bg-red-500">
                {text}
            </div>
        </>
    )
}

Button.displayName = 'button'
Button.defaultProps = {
    variant: 'primary',
    text: 'button',
    children: null
}

export default Button