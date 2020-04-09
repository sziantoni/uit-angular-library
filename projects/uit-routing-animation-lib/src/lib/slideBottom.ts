import {
  trigger,
  transition,
  style,
  query,
  animate,
 sequence, stagger,
} from '@angular/animations';

const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';

export const slideBottom =
  trigger('slideBottom', [
    transition('* <=> *', [
      query(':enter > *', [
        style({
          position: 'fixed',
          opacity: 0
        }) ,
      ] , {
        optional: true
      }),
      query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0}), {
        optional: true
      }),
      sequence([
        query(':leave > *', [
          style({ opacity: 1, transform: 'translateY(0%)' }),
          animate('0.3s 0s ease-in-out',
            style({ transform: 'translateY(-30%)', opacity: 0}) ),
          style({position: 'fixed'})
        ] , {
          optional: true
        }),
        query(':enter >*', [
          style({transform: 'translateY(-30%)', opacity: 0, position: 'static' }),
          animate(
            '0.6s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          )
        ] , {
          optional: true
        })
      ]),
      query(
        ':enter .' + ROUTE_ANIMATIONS_ELEMENTS,
        stagger(75, [
          style({ transform: 'translateY(-30%)', opacity: 0 }),
          animate(
            '0.5s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          )
        ]),
        { optional: true }
      )
    ])

  ]);
