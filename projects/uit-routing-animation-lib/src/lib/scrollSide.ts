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


export const scrollSide =
  trigger('scrollSide', [
    transition('* => scrollLeft', scroll('-') ),
    transition('* => scrollRight', scroll('+') ),
    transition('scrollRight => *', scroll('-') ),
    transition('scrollLeft => *', scroll('+') )
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
        position: 'absolute',
        transform: 'translateX(' + [direction] + '0%)',
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({transform: 'translateX(' + [direction] + '100%)'})
    ] , { optional: true }),
    sequence([
      query(':leave', [
        animate('400ms ease-out', style({ transform: 'translateX(' + [opposite] + '100%)'}))
      ], { optional: true }),
      query(':enter', [
        animate('400ms ease-out', style({transform: 'translateX(' + [direction] + '0%)' }))
      ] , { optional: true })
    ])
  ];
}
