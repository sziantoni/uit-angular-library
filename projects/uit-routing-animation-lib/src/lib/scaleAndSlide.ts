import {
  trigger,
  transition,
  style,
  query,
  animate,
  keyframes, sequence,  AnimationTriggerMetadata,
} from '@angular/animations';

const ROUTING_ELEMENT = 'route-animations-element';

export function scaleAndSlide(): AnimationTriggerMetadata {
  return trigger('scaleAndSlide', [
    transition('* => scrollLeft', scale('-'), { params: {
        enterT: '0.6',
        leaveT: '0.8',
        enterD: '0',
        leaveD: '0' } }),
    transition('* => scrollRight', scale('+'), { params: {
        enterT: '0.6',
        leaveT: '0.8',
        enterD: '0',
        leaveD: '0' } }),
    transition('scrollRight => *', scale('-'), { params: {
        enterT: '0.6',
        leaveT: '0.8',
        enterD: '0',
        leaveD: '0' } }),
    transition('scrollLeft => *', scale('+'), { params: {
        enterT: '0.6',
        leaveT: '0.8',
        enterD: '0',
        leaveD: '0' } }),
    transition('* <=> *', scale('+'), { params: {
        enterT: '0.6',
        leaveT: '0.8',
        enterD: '0',
        leaveD: '0' } }),
  ]);
}


export function scaleAndSlide_customAll(direction: string, speed: string): AnimationTriggerMetadata {
  switch (direction) {
    case('left'): {
      switch (speed) {
        case ('low') : {
          return trigger('scaleAndSlide', [
            transition('* <=> *', scale('-'), { params: {
                enterT: '1.2',
                leaveT: '1.4',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('medium') : {
          return trigger('scaleAndSlide', [
            transition('* <=> *', scale('-'), { params: {
                enterT: '0.6',
                leaveT: '0.8',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('high') : {
          return trigger('scaleAndSlide', [
            transition('* <=> *', scale('-'), { params: {
                enterT: '0.3',
                leaveT: '0.5',
                enterD: '0',
                leaveD: '0' } })]);
        }
      }

    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case('right'): {
      switch (speed) {
        case ('low') : {
          return trigger('scaleAndSlide', [
            transition('* <=> *', scale('+'), { params: {
                enterT: '1.2',
                leaveT: '1.4',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('medium') : {
          return trigger('scaleAndSlide', [
            transition('* <=> *', scale('+'), { params: {
                enterT: '0.6',
                leaveT: '0.8',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('high') : {
          return trigger('scaleAndSlide', [
            transition('* <=> *', scale('+'), { params: {
                enterT: '0.3',
                leaveT: '0.5',
                enterD: '0',
                leaveD: '0' } })]);
        }
      }

    }
  }

}

export function scaleAndSlide_customSpeed(speed: string): AnimationTriggerMetadata {
  switch (speed) {
    case ('low') : {
      return trigger('scaleAndSlide', [
        transition('* => scrollLeft', scale('-'), { params: {
            enterT: '1.2',
            leaveT: '1.4',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', scale('+'), { params: {
            enterT: '1.2',
            leaveT: '1.4',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', scale('-'), { params: {
            enterT: '1.2',
            leaveT: '1.4',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', scale('+'), { params: {
            enterT: '1.2',
            leaveT: '1.4',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', scale('+'), { params: {
            enterT: '1.2',
            leaveT: '1.4',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('medium') : {
      return trigger('scaleAndSlide', [
        transition('* => scrollLeft', scale('-'), { params: {
            enterT: '0.6',
            leaveT: '0.8',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', scale('+'), { params: {
            enterT: '0.6',
            leaveT: '0.8',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', scale('-'), { params: {
            enterT: '0.6',
            leaveT: '0.8',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', scale('+'), { params: {
            enterT: '0.6',
            leaveT: '0.8',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', scale('+'), { params: {
            enterT: '0.6',
            leaveT: '0.8',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }
    case ('high') : {
      return trigger('scaleAndSlide', [
        transition('* => scrollLeft', scale('-'), { params: {
            enterT: '0.3',
            leaveT: '0.5',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', scale('+'), { params: {
            enterT: '0.3',
            leaveT: '0.5',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', scale('-'), { params: {
            enterT: '0.3',
            leaveT: '0.5',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', scale('+'), { params: {
            enterT: '0.3',
            leaveT: '0.5',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', scale('+'), { params: {
            enterT: '0.3',
            leaveT: '0.5',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }

  }

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
          style({opacity: 1, transform: 'scale(.7)', offset: 0.5 }),
          style({opacity: 1, transform: 'scale(.7) translateX(' + [opposite] + '0%)', offset: 0.55 }),
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
