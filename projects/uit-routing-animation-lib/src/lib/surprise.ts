const ROUTING_ELEMENT = 'route-animations-elements';

import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes, group,
} from '@angular/animations';

export const surprise =
  trigger('surprise', [
    transition('* <=> *', [
      query(':enter', [
        style({
          position: 'fixed',
          opacity: 0
        }) ,
      ] , {
        optional: true
      }),
      query(':enter .' + ROUTING_ELEMENT, [
        style({
          opacity: 0
        }) ,
      ] , {
        optional: true
      }),
      query(':leave', [
        style({
          position: 'relative'
        }) ,
      ] , {
        optional: true
      }),
      sequence([
        query(':leave .' + ROUTING_ELEMENT,
          stagger(-100, [
          animate('{{leaveTR}}s {{leaveDR}}s ease-out', keyframes([
            style({ offset: 0, opacity: 1, transform: 'translateY(0%)', transformOrigin: 'center bottom'}),
            style({ offset: 1, opacity: 0, transform: 'translateY(200%) rotate(30deg)'}),
          ]))]), {optional: true}),
      query(':leave',
        animate('{{leaveT}}s {{leaveD}}s ease-out', keyframes([
          style({ offset: 0, opacity: 1, transform: 'translateY(0%)', transformOrigin: 'center bottom', position: 'fixed'}),
          style({ offset: 1, opacity: 0, transform: 'translateY(200%) rotate(30deg)', position: 'fixed'}),
        ])), {optional: true}),
      query(':enter',
          animate('{{enterT}}s {{enterD}}s ease-out', keyframes([
            style({ offset: 0, opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom'}),
            style({ offset: 0.2, opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom'}),
            style({ offset: 0.5, opacity: 0.7 , transform: 'rotate(-10deg)'}),
            style({ offset: 0.7, opacity: 0.7, transform: 'rotate(3deg)'}),
            style({ offset: 1, opacity: 1, transform: 'scale(1)', position: 'relative'})
          ])), {optional: true}),
        query(':enter .' + ROUTING_ELEMENT,
          stagger(200, [
          animate('{{enterTR}}s {{enterDR}}s ease-out', keyframes([
            style({ offset: 0, opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom'}),
            style({ offset: 0.5, opacity: 0.7 , transform: 'rotate(-10deg)'}),
            style({ offset: 0.7, opacity: 0.7, transform: 'rotate(3deg)'}),
            style({ offset: 1, opacity: 1, transform: 'scale(1)'})
          ]))]), {optional: true})
      ])

    ] , {params: {enterT: '0.7', leaveT: '0.4',  enterD: '0', leaveD: '0', enterTR: '0.5', enterDR: '0', leaveTR: '0.5', leaveDR: '0'} })

  ]);
