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
const ROUTING_ELEMENT = 'route-animations-elements';


export const slideTitleDownBlocks =
  trigger('slideTitleDownBlocks', [
    transition('* <=> *', [
      query(':leave', style({
        position: 'relative'}), {
        optional: true
      }),
      query(':enter', [
        style({
          position: 'fixed',
          width: '100%',
          opacity: 0,
          transform: 'translateX(100%)'
        })
      ], { optional: true}),
      query(':enter .' + ROUTING_ELEMENT, style({ opacity: 0}), {
        optional: true
      }),
      sequence([
        query(':leave .' + ROUTING_ELEMENT, stagger( 75, [
          stagger(75, [
            style({ transform: 'translateY(0%)', opacity: 1 }),
            animate(
              '{{leaveTR}}s {{enterTR}}s ease-in-out',
              style({ transform: 'translateY(-30%)', opacity: 0 })
            )])
        ]), {optional: true }),
          query(':leave', [
            style({
              opacity: 1,
              transform: 'translateX(0%)',
              offset: 1,
              position: 'fixed'}),
            animate('{{leaveT}}s {{leaveD}}s ease-in',
              style({
                opacity: 1,
                transform: 'translateX(-100%)',
                offset: 1,
                position: 'fixed'})
            )
          ], { optional: true }),
          query(':enter', [
            style({
              opacity: 1,
              transform: 'translateX(+100%)',
              offset: 1}),
            animate('{{enterT}}s {{enterD}}s ease-out',
              style({
                opacity: 1,
                transform: 'translateX(0%)',
                offset: 1,
                position: 'relative'})
            )
          ] , { optional: true }),
      query(':enter .' + ROUTING_ELEMENT, stagger( 75, [
        stagger(75, [
          style({ transform: 'translateY(-30%)', opacity: 0 }),
          animate(
            '{{enterTR}}s {{enterDR}}s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          )])
      ]), {optional: true })
      ]),
    ] , {params: {enterT: '0.7', leaveT: '0.7',  enterD: '0', leaveD: '0', enterTR: '0.4', enterDR: '0', leaveTR: '0.4', leaveDR: '0'} })
  ] );
