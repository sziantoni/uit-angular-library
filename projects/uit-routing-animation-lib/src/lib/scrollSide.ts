import {
  trigger,
  transition,
  style,
  query,
  animate,
  keyframes, sequence, AnimationTriggerMetadata,
} from '@angular/animations';

export function scrollSide(): AnimationTriggerMetadata {
  return trigger('scrollSide', [
    transition('* => scrollLeft', scroll('-'), { params: {
        enterT: '0.6',
        leaveT: '0.6',
        enterD: '0',
        leaveD: '0' } }),
    transition('* => scrollRight', scroll('+'), { params: {
        enterT: '0.6',
        leaveT: '0.6',
        enterD: '0',
        leaveD: '0' } }),
    transition('scrollRight => *', scroll('-'), { params: {
        enterT: '0.6',
        leaveT: '0.6',
        enterD: '0',
        leaveD: '0' } }),
    transition('scrollLeft => *', scroll('+'), { params: {
        enterT: '0.6',
        leaveT: '0.6',
        enterD: '0',
        leaveD: '0' } }),
    transition('* <=> *', scroll('+'), { params: {
        enterT: '0.6',
        leaveT: '0.6',
        enterD: '0',
        leaveD: '0' } }),
  ]);
}


export function scrollSide_customAll(direction: string, speed: string): AnimationTriggerMetadata {
  switch (direction) {
    case('left'): {
      switch (speed) {
        case ('low') : {
          return trigger('scrollSide', [
            transition('* <=> *', scroll('-'), { params: {
                enterT: '1.2',
                leaveT: '1.2',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('medium') : {
          return trigger('scrollSide', [
            transition('* <=> *', scroll('-'), { params: {
                enterT: '0.6',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('high') : {
          return trigger('scrollSide', [
            transition('* <=> *', scroll('-'), { params: {
                enterT: '0.3',
                leaveT: '0.3',
                enterD: '0',
                leaveD: '0' } })]);
        }
      }

    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case('right'): {
      switch (speed) {
        case ('low') : {
          return trigger('scrollSide', [
            transition('* <=> *', scroll('+'), { params: {
                enterT: '1.2',
                leaveT: '1.2',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('medium') : {
          return trigger('scrollSide', [
            transition('* <=> *', scroll('+'), { params: {
                enterT: '0.6',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('high') : {
          return trigger('scrollSide', [
            transition('* <=> *', scroll('+'), { params: {
                enterT: '0.3',
                leaveT: '0.3',
                enterD: '0',
                leaveD: '0' } })]);
        }
      }

    }
  }

}

export function scrollSide_customSpeed(speed: string): AnimationTriggerMetadata {
  switch (speed) {
    case ('low') : {
      return trigger('scrollSide', [
        transition('* => scrollLeft', scroll('-'), { params: {
            enterT: '1.2',
            leaveT: '1.2',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', scroll('+'), { params: {
            enterT: '1.2',
            leaveT: '1.2',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', scroll('-'), { params: {
            enterT: '1.2',
            leaveT: '1.2',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', scroll('+'), { params: {
            enterT: '1.2',
            leaveT: '1.2',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', scroll('+'), { params: {
            enterT: '1.2',
            leaveT: '1.2',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('medium') : {
      return trigger('scrollSide', [
        transition('* => scrollLeft', scroll('-'), { params: {
            enterT: '0.6',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', scroll('+'), { params: {
            enterT: '0.6',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', scroll('-'), { params: {
            enterT: '0.6',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', scroll('+'), { params: {
            enterT: '0.6',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', scroll('+'), { params: {
            enterT: '0.6',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }
    case ('high') : {
      return trigger('scrollSide', [
        transition('* => scrollLeft', scroll('-'), { params: {
            enterT: '0.3',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', scroll('+'), { params: {
            enterT: '0.3',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', scroll('-'), { params: {
            enterT: '0.3',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', scroll('+'), { params: {
            enterT: '0.3',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', scroll('+'), { params: {
            enterT: '0.3',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }

  }

}


function scroll(direction) {
  let opposite;
  if (direction === '-'){
    opposite = '+';
  }else {
    opposite = '-';
  }
  return [
    query(' :leave', [
      style({
        position: 'fixed',
        overflow: 'hidden',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({
        transform: 'translateX(' + [direction] + '100%)',
        opacity: 0,
        position: 'fixed',
        width: '100%'
      })
    ] , { optional: true }),
    sequence([
      query(':leave', [
          animate('{{leaveT}}s {{leaveD}}s ease-in',
            keyframes([
              style({
                opacity: 1,
                transform: 'translateX(' + [direction] + '0%)',
                offset: 0}),
              style({
                opacity: 1,
                transform: 'translateX(' + [direction] + '10%)',
                offset: 0.3}),
              style({
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
