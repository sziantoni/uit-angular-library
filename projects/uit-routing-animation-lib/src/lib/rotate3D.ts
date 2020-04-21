const ROUTING_ELEMENT = 'route-animations-elements';
import { trigger, transition, style, query, animate, sequence, keyframes, group, } from '@angular/animations';
export const rotate3D = trigger('rotate3D', [
  transition('* => scrollLeft', rotate('-'), { params: { enterT: '0.6', leaveT: '0.3', enterD: '0', leaveD: '0' } }),
  transition('* => scrollRight', rotate('+'), { params: { enterT: '0.6', leaveT: '0.3', enterD: '0', leaveD: '0' } }),
  transition('scrollRight => *', rotate('-'), { params: { enterT: '0.6', leaveT: '0.3', enterD: '0', leaveD: '0' } }),
  transition('scrollLeft => *', rotate('+'), { params: { enterT: '0.6', leaveT: '0.3', enterD: '0', leaveD: '0' } }),
  transition('* <=> *', rotate('+'), { params: { enterT: '0.6', leaveT: '0.3', enterD: '0', leaveD: '0' } }),
]);
function rotate(direction) {
  if (direction === '+') {
    return [
      query(':enter, :leave', style({
        position: 'fixed',
        overflow: 'hidden',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        opacity: 0
      }), { optional: true }),
      sequence([
        query(':leave', [
          style({ transform: 'scale(1)', opacity: 1 }),
          animate('{{leaveT}}s {{leaveD}}s ease-out', style({ transform: 'scale(0.5)', opacity: 1, transformOrigin: '55% 0%' }))
        ], { optional: true }),
        group([
          query(':leave', [
            style({ opacity: 1, transformOrigin: '55% 0%', transform: 'scale(0.5)' }),
            animate('{{leaveT}}s {{leaveD}}s ease-in', keyframes([
              style({ perspective: '2000px', transform: 'scale(0.5) translateX(-40%) rotateY(-45deg)', offset: 0.5 }),
              style({ perspective: '2000px', opacity: 0, transform: 'scale(0.5) translateX(-40%) rotateY(-90deg)', offset: 1 })
            ]))
          ], { optional: true }),
          query(':enter', [
            style({ transformOrigin: '0% 0%', transform: 'scale(0.5)'}),
            animate('{{enterT}}s {{enterD}}s ease-in', keyframes([
              style({ opacity: 0, transform: 'scale(0.5) translateX(100%) rotateY(90deg)', offset: 0 }),
              style({ opacity: 0.3, perspective: '2000px', transform: 'scale(0.5) translateX(50%) rotateY(45deg)', offset: 0.5, }),
              style({ opacity: 1, perspective: '2000px', transform: 'scale(0.5) translateX(50%)  rotateY(0deg)', offset: 0.8 }),
              style({ transform: ' translateX(0%) translateZ(00px) rotateY(0deg) scale(1)', opacity: 1, offset: 1 })
            ]))
          ], { optional: true })
        ])
      ])
    ];
  }
  else {
    return [
      query(':enter, :leave', style({
        position: 'fixed',
        overflow: 'hidden',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        opacity: 0
      }), { optional: true }),
      sequence([
        query(':leave', [
          style({ transform: 'scale(1)', opacity: 1 }),
          animate('{{leaveT}}s {{leaveD}}s ease-out', style({ transform: 'scale(0.5)', opacity: 1, transformOrigin: '50% 0%' }))
        ], { optional: true }),
        group([
          query(':leave', [
            style({ opacity: 1, transformOrigin: '50% 0%', transform: 'scale(0.5)' }),
            animate('{{leaveT}}s {{leaveD}}s ease-in', keyframes([
              style({ perspective: '2000px', transform: 'scale(0.5) translateX(35%) rotateY(45deg)', offset: 0.5 }),
              style({ perspective: '2000px', opacity: 0, transform: 'scale(0.5) translateX(35%) rotateY(90deg)', offset: 1 })
            ]))
          ], { optional: true }),
          query(':enter', [
            style({ transformOrigin: '100% 0%', transform: 'scale(0.5)', position: 'fixed' }),
            animate('{{enterT}}s {{enterD}}s ease-in', keyframes([
              style({ opacity: 0, transform: 'scale(0.5) translateX(-100%) rotateY(-90deg)', offset: 0 }),
              style({ opacity: 0.3, perspective: '2000px', transform: 'scale(0.5) translateX(-50%) rotateY(-45deg)', offset: 0.5, }),
              style({ opacity: 1, perspective: '2000px', transform: 'scale(0.5) translateX(-50%)  rotateY(0deg)', offset: 0.8 }),
              style({ transform: ' translateX(0%) translateZ(00px) rotateY(0deg) scale(1)', opacity: 1, offset: 1 })
            ]))
          ], { optional: true })
        ])
      ])
    ];
  }
}
