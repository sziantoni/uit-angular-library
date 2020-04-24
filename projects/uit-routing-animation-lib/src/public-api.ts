/*
 * Public API Surface of uit-routing-animation-lib
 */

export const ROUTING_ELEMENT = 'route-animations-elements';
export const ROUTING_ELEMENT_SECOND_LEVEL = 'route-animations-elements-2-level';
export const ROUTE_ANIMATIONS_TEXT = 'route-animation-text';

export {slide, slide_customSpeed} from './lib/slide';
export {scrollSideAnimation, scrollSideAnimation_setParametres} from './lib/scrollSide';
export {rotate, rotate_customSpeed} from './lib/rotate';
export {leftUpAnimation, leftUp_setParametres} from './lib/leftUp';
export {rightUpAnimation, rightUp_setParametres} from './lib/rightUp';
export {flip, flip_customSpeed} from './lib/flip';
export {fadeBackAnimation, fadeBackAnimation_setParametres} from './lib/fadeBack';
export {scaleAndSlideAnimation, scaleAndSlideAnimation_setParametres} from './lib/scaleAndSlide';
export {surpriseAnimation, surpriseAnimation_setParametres} from './lib/surprise';
export {slideTitleDownBlocksAnimation, slideTitleDownBlocksAnimation_setParametres} from './lib/slideTitleDownBlocks';
export {rotate3DAnimation, rotate3DAnimation_setParametres} from './lib/rotate3D';
