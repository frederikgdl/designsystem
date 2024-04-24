import React from 'react';
import { bool, string, node, oneOf } from 'prop-types';
import classNames from 'classnames';
import texts from './texts';

const Spinner = ({
    className,
    immediate,
    large,
    loadingText,
    locale,
    onColoredBg,
    ...rest
}) => (
    <div aria-live="assertive" className={className} {...rest}>
        <span
            className={classNames(
                'ffe-loading-spinner',
                { 'ffe-loading-spinner--on-colored-bg': onColoredBg },
                { 'ffe-loading-spinner--immediate': immediate },
                { 'ffe-loading-spinner--large': large },
            )}
            role="img"
            aria-label={texts[locale].ariaLabel}
            aria-hidden={!!loadingText}
        />
        {loadingText}
    </div>
);

Spinner.propTypes = {
    className: string,
    immediate: bool,
    large: bool,
    loadingText: node,
    /** 'nb', 'nn', or 'en' */
    locale: oneOf(['en', 'nb', 'nn']),
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg: bool,
};

Spinner.defaultProps = {
    immediate: false,
    large: false,
    locale: 'nb',
};

export default Spinner;
