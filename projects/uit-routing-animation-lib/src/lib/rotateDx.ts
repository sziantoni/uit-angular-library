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

export const rotateDx =
  trigger('rotateDx', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'fixed',
          width: '100%',
          opacity: 0
        })
      ], { optional: true}),
      query(':enter .' + ROUTING_ELEMENT, style({ opacity: 0}), {
        optional: true
      }),
      sequence([
        query(':leave', [
          style({opacity : 1 , transformOrigin: 'right bottom', transform: 'translate3d(0,0,0)'}),
          animate( '{{leaveT}}s {{leaveD}}s ease-in' ,
            style({opacity: 0.5 , transform: ' rotate3d(0,0,1,90deg) translate3d(-50%,0,0)' , transformOrigin: 'right bottom'})
          )
        ], {optional: true }),
        query(':enter ', stagger( 0, [
          style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -90deg)'}),
          animate('{{enterT}}s {{enterD}}s  ease-out',
            style({opacity: 1, transformOrigin: 'right bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
        ]), {optional: true })
      ]),
      query(':enter .' + ROUTING_ELEMENT, stagger( 75, [
        style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -90deg)'}),
        animate('{{enterTR}}s {{enterDR}}s ease-out',
          style({opacity: 1, transformOrigin: 'right bottom' , transform: 'translate3d(0,0,0)', position: 'relative'}))
      ]), {optional: true })
    ] , {params: {enterT: '0.7', leaveT: '0.7',  enterD: '0', leaveD: '0', enterTR: '0.7', enterDR: '0'} })
  ] );
