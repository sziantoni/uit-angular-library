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


export const flip = trigger('flip', [
  transition('* <=> *', [
    query(':enter .' + ROUTING_ELEMENT, style({
      opacity: 0
    }), { optional: true}),
    query(':leave' , style({
      position: 'relative'
    }), { optional: true}),
    query(':enter', style({
      opacity: 0,
      position: 'fixed'
    }), { optional: true} ),
      sequence([
      query(
        ':leave .' + ROUTING_ELEMENT,
        stagger(-200, [
          style({ transform: 'perspective(3000px) rotate3d(0, 1, 0, 0)', position: 'relative',  opacity: 1, flex: 'inherit' }),
          animate(
            '{{enterT}}s {{enterD}}s ease-in',
            style({transform: 'perspective(2000px) rotate3d(0, 1, 0, 90deg)',
              opacity: 0, offset: 1, flex: 'inherit' }),
          )
        ]),
        { optional: true }
      ),
      query(':leave', [
        style({ transform: 'perspective(2000px) rotate3d(0, 1, 0, 0)', opacity: 1}),
          animate('{{leaveT}}s {{leaveD}}s ease-in', keyframes([
              style({
                transform: 'perspective(2000px) rotate3d(0, 1, 0, 90deg)',  opacity: 0, width: '100%', offset: 1}),
            ])
          )
        ], {optional: true} ),
        query(':leave', [
          style({ position: 'fixed'})
        ], {optional: true} ),
        query(':enter', [
          style({ opacity: 0})
        ], {optional: true} ),
        query(':enter' , [
        style({ opacity: 0, transform: 'perspective(2000px) rotate3d(0, 1, 0, -90deg)' }),
          animate(
            '{{enterT}}s {{enterD}}s ease-out',
            // tslint:disable-next-line:max-line-length
            style({transform: 'perspective(2000px) rotate3d(0, 1, 0, 0deg)',  opacity: 1,  offset: 1,  flex: 'inherit', position: 'relative'}),
          )
      ], {optional: true} )
    ,
    query(
      ':enter .' + ROUTING_ELEMENT,
      stagger(200, [
        style({ transform: 'perspective(2000px) rotate3d(0, 1, 0, -90deg)', opacity: 0,   flex: 'inherit'}),
        animate(
          '{{enterT}}s {{enterD}}s ease-out',
          style({transform: 'perspective(2000px) rotate3d(0, 1, 0, 0deg)',  opacity: 1,  offset: 1,  flex: 'inherit'}),
        )
      ]),
      { optional: true }
    )])
  ], {params: {enterT: '0.5', leaveT: '0.5',  enterD: '0', leaveD: '0'} })
]);



