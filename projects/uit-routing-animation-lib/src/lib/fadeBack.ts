const ROUTING_ELEMENT = 'route-animations-elements';
const ROUTING_ELEMENT_SECOND_LEVEL = 'route-animations-elements-2-level';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes, group, animation,
} from '@angular/animations';


export const fadeBack = trigger('fadeBack', [
  transition('* <=> *', [
    query(':enter > *' ,
      style({
        opacity: 0,
        position: 'fixed'
      }), {optional: true} ),
    query(':leave > *' ,
      style({
        position: 'relative'
      }), {optional: true} ),
    query(':enter .' + ROUTING_ELEMENT , style({
      opacity: 0,
      position: 'relative'
    }) , {optional: true}),
    sequence([
    query(
      ':leave .' + ROUTING_ELEMENT, [
        stagger(-100, [
          style({ transform: 'scale3d(1, 1, 1) rotate3d(1,0,0,0)',  opacity: 1}),
          animate('{{leaveT}}s {{leaveD}}s ease-out',
            style({transform: ' scale3d(0.3, 0.3, 0.3)',   opacity: 0,  }),
          ),
        ]), style({position: 'relative'})], { optional: true }
    ),
    sequence([
      query(':leave > *', [
          style({ transform: 'scale3d(1, 1, 1) rotate3d(1,0,0,0deg)',   opacity: 1}),
          animate('{{leaveT}}s {{leaveD}}s ease-out',
              style({transform: 'scale3d(0.3, 0.3, 0.3)',  opacity: 0, }),
          ),
        style({position: 'fixed'})
        ], {optional: true} ),
    query(':enter > *', [
        style({ transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0}),
          animate('{{enterT}}s {{enterD}}s ease-out',
            style({transform: 'scale3d(1, 1, 1)',  opacity: 1,  position: 'relative'}),
          )
        ], {optional: true} ),
    ])
    ,
        query('.' + ROUTING_ELEMENT, [
          style({ transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0}),
          stagger( 10, [
            animate('{{enterT}}s {{enterD}}s ease-out',
                style({transform: 'scale3d(1, 1, 1)',  opacity: 1,  position: 'relative' }),
            )
          ] )], {optional: true} )])

  ], {params: {enterT: '0.5', leaveT: '0.5',  enterD: '0', leaveD: '0'} })
]);



