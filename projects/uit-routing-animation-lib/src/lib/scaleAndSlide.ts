import {
  trigger,
  transition,
  style,
  query,
  animate,
  keyframes, sequence,  AnimationTriggerMetadata,
} from '@angular/animations';

const ROUTING_ELEMENT = 'route-animations-element';

export function scaleAndSlideAnimation(): AnimationTriggerMetadata {
  return trigger('scaleAndSlide', [
    transition('* => scrollLeft', scale('-'), { params: {
        enterT: '0.5',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0' } }),
    transition('* => scrollRight', scale('+'), { params: {
        enterT: '0.5',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0' } }),
    transition('scrollRight => *', scale('-'), { params: {
        enterT: '0.5',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0' } }),
    transition('scrollLeft => *', scale('+'), { params: {
        enterT: '0.5',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0' } }),
    transition('* <=> *', scale('+'), { params: {
        enterT: '0.5',
        leaveT: '0.5',
        enterD: '0',
        leaveD: '0' } }),
  ]);
}



export function scaleAndSlideAnimation_setParametres(
  entert: string ,
  enterd: string,
  leavet: string,
  leaved: string,
): AnimationTriggerMetadata {
  return trigger('scaleAndSlide', [
    transition('* => scrollLeft', scale('-'), { params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved } }),
    transition('* => scrollRight', scale('+'), { params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved } }),
    transition('scrollRight => *', scale('-'), { params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved } }),
    transition('scrollLeft => *', scale('+'), { params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved } }),
    transition('* <=> *', scale('+'), { params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved} }),
  ]);
}


function scale(direction) {
  let opposite;
  if (direction === '-') {
    opposite = '+';
  } else {
    opposite = '-';
  }
  return [
    query(':leave', [
      style({
        position: 'relative',
        overflow: 'hidden',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      })
    ], {optional: true}),
    query(':enter', [
      style({
        opacity: 0,
        position: 'fixed',
        overflow: 'hidden',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }),
    ], {optional: true}),
    query(':enter .' + ROUTING_ELEMENT, [
      style({
        opacity: 0
      }),
    ], {optional: true}),
    sequence([
      query(':leave', [
        animate('{{leaveT}}s {{leaveD}}s ease-in', keyframes([
          style({ opacity: 1 , transform: 'scale(1)', offset: 0}),
          style({opacity: 1, transform: 'scale(.7)', offset: 0.55 }),
          style({opacity: 1, transform: 'scale(.7) translateX(' + [opposite] + '300%)', offset: 0.65 }),
          style({opacity: 0, transform: 'scale(.7) translateX(' + [opposite] + '300%)',  offset: 1 }),
        ])),
        style({position: 'fixed'})
      ], {optional: true}),
      query(':enter ' , [
          style({opacity: 0, transform: 'scale(.7)', width: 'auto', flex: 'inherit'}),
          animate('{{enterT}}s {{enterD}}s ease-out', keyframes([
            style({
              opacity: 0.5,
              transform: 'scale(.7) translateX(' + [direction] + '200%) scale(.4)',
              flex: 'inherit',
              offset: 0}),
            style({opacity: 1, transform: 'scale(.7)', offset: 0.55 , flex: 'inherit', position: 'relative'}),
            style({opacity: 1, transform: 'scale(1) translate3d(0,0,0)', offset: 1, position: 'relative' , flex: 'inherit'})
          ]))], {optional: true})
    ])
  ];
}
