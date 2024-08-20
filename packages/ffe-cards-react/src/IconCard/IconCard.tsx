import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { CardRenderProps, ComponentAsPropParams } from '../types';
import classNames from 'classnames';
import { WithCardAction, Text, Subtext, Title, CardName } from '../components';
import { fixedForwardRef } from '../fixedForwardRef';

export type IconCardProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** Element of icon */
    icon: ReactElement;
    /** Smaller icon and less space */
    condensed?: boolean;
    /** Position icon at left (default) or right of the card content */
    iconPosition?: 'right' | 'left';
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function IconCardWithForwardRef<As extends ElementType>(
    props: IconCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, condensed, icon, children, iconPosition, ...rest } =
        props;
    return (
        <WithCardAction
            baseClassName="ffe-icon-card"
            className={classNames(
                'ffe-icon-card',
                { 'ffe-icon-card--condensed': condensed },
                { 'ffe-icon-card--right': iconPosition === 'right' },
                className,
            )}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }) => {
                const content = [
                    React.cloneElement(icon, {
                        ...icon.props,
                        key: 'icon',
                        className: classNames(
                            'ffe-icon-card__icon',
                            icon.props.className,
                        ),
                    }),
                    <div className="ffe-icon-card__body" key="body">
                        {typeof children === 'function'
                            ? children({
                                  Text,
                                  Subtext,
                                  Title,
                                  CardName,
                                  CardAction,
                              })
                            : children}
                    </div>,
                ];
                return (
                    <>
                        {iconPosition === 'right' ? content.reverse() : content}
                    </>
                );
            }}
        </WithCardAction>
    );
}

export const IconCard = fixedForwardRef(IconCardWithForwardRef);
