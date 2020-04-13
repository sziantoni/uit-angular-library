import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes, sequence, stagger,
} from '@angular/animations';
const ROUTING_ELEMENT = 'route-animations-element';


export const scrollSide =
  trigger('scrollSide', [
    transition('* => scrollLeft', scroll('-'), {params: {enterT: '0.7', leaveT: '0.6',  enterD: '0', leaveD: '0'} } ),
    transition('* => scrollRight', scroll('+'), {params: {enterT: '0.7', leaveT: '0.6',  enterD: '0', leaveD: '0'} }),
    transition('scrollRight => *', scroll('-'), {params: {enterT: '0.7', leaveT: '0.6',  enterD: '0', leaveD: '0'} }),
    transition('scrollLeft => *', scroll('+'), {params: {enterT: '0.7', leaveT: '0.6',  enterD: '0', leaveD: '0'} } )
  ]);

function scroll(direction) {
  let opposite;
  if (direction === '-'){
    opposite = '+';
  }else {
    opposite = '-';
  }
  return [
    query(':enter, :leave', [
      style({
        position: 'fixed',
        transform: 'translateX(' + [direction] + '0%)',
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({
      transform: 'translateX(' + [direction] + '100%)'
      })
    ] , { optional: true }),
    sequence([
      query(':leave', [
          animate('{{leaveT}}s {{leaveD}}s ease-in',
            keyframes([
              style({
                position: 'fixed',
                opacity: 1,
                transform: 'translateX(' + [direction] + '0%)',
                offset: 0}),
              style({
                position: 'fixed',
                opacity: 1,
                transform: 'translateX(' + [direction] + '10%)',
                offset: 0.3}),
              style({
              position: 'fixed',
              opacity: 1,
              transform: 'translateX(' + [opposite] + '100%)',
              offset: 1})
            ]))
      ], { optional: true }),
      query(':enter', [
        animate('{{enterT}}s {{enterD}}s ease-out',
          keyframes([
            style({
              position: 'fixed',
              opacity: 1,
              transform: 'translateX(' + [direction] + '100%)',
              offset: 0}),
            style({
              position: 'fixed',
              opacity: 1,
              transform: 'translateX(' + [direction] + '0%)',
              offset: 0.8}),
            style({
              position: 'fixed',
              opacity: 1,
              transform: 'translateX(' + [opposite] + '10%)',
              offset: 1})
          ]))
      ] , { optional: true })
    ] )
  ];
}
