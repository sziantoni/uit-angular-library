import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence,
  keyframes,
  group,
  AnimationTriggerMetadata
} from '@angular/animations';


function rotateA(dir) {
  if (dir === '+') {
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


export function rotate3D(): AnimationTriggerMetadata {
  return trigger('rotate3D', [
    transition('* => scrollLeft', rotateA('-'), { params: {
        enterT: '0.6',
        leaveT: '0.3',
        enterD: '0',
        leaveD: '0' } }),
    transition('* => scrollRight', rotateA('+'), { params: {
        enterT: '0.6',
        leaveT: '0.3',
        enterD: '0',
        leaveD: '0' } }),
    transition('scrollRight => *', rotateA('-'), { params: {
        enterT: '0.6',
        leaveT: '0.3',
        enterD: '0',
        leaveD: '0' } }),
    transition('scrollLeft => *', rotateA('+'), { params: {
        enterT: '0.6',
        leaveT: '0.3',
        enterD: '0',
        leaveD: '0' } }),
    transition('* <=> *', rotateA('+'), { params: {
        enterT: '0.6',
        leaveT: '0.3',
        enterD: '0',
        leaveD: '0' } }),
  ]);
}


export function rotate3D_customAll(direction: string, speed: string): AnimationTriggerMetadata {
  switch (direction) {
    case('left'): {
      switch (speed) {
        case ('low') : {
          return trigger('rotate3D', [
            transition('* <=> *', rotateA('-'), { params: {
                enterT: '1.2',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('medium') : {
          return trigger('rotate3D', [
            transition('* <=> *', rotateA('-'), { params: {
                enterT: '0.6',
                leaveT: '0.3',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('high') : {
          return trigger('rotate3D', [
            transition('* <=> *', rotateA('-'), { params: {
                enterT: '0.3',
                leaveT: '0.15',
                enterD: '0',
                leaveD: '0' } })]);
        }
      }

    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case('right'): {
      switch (speed) {
        case ('low') : {
          return trigger('rotate3D', [
            transition('* <=> *', rotateA('+'), { params: {
                enterT: '1.2',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('medium') : {
          return trigger('rotate3D', [
            transition('* <=> *', rotateA('+'), { params: {
                enterT: '0.6',
                leaveT: '0.3',
                enterD: '0',
                leaveD: '0' } })]);
        }
        case ('high') : {
          return trigger('rotate3D', [
            transition('* <=> *', rotateA('+'), { params: {
                enterT: '0.3',
                leaveT: '0.15',
                enterD: '0',
                leaveD: '0' } })]);
        }
      }

    }
    }

  }

export function rotate3D_customSpeed(speed: string): AnimationTriggerMetadata {
  switch (speed) {
    case ('low') : {
      return trigger('rotate3D', [
        transition('* => scrollLeft', rotateA('-'), { params: {
            enterT: '1.2',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', rotateA('+'), { params: {
            enterT: '1.2',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', rotateA('-'), { params: {
            enterT: '1.2',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', rotateA('+'), { params: {
            enterT: '1.2',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', rotateA('+'), { params: {
            enterT: '1.2',
            leaveT: '0.6',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('medium') : {
      return trigger('rotate3D', [
        transition('* => scrollLeft', rotateA('-'), { params: {
            enterT: '0.6',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', rotateA('+'), { params: {
            enterT: '0.6',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', rotateA('-'), { params: {
            enterT: '0.6',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', rotateA('+'), { params: {
            enterT: '0.6',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', rotateA('+'), { params: {
            enterT: '0.6',
            leaveT: '0.3',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }
    case ('high') : {
      return trigger('rotate3D', [
        transition('* => scrollLeft', rotateA('-'), { params: {
            enterT: '0.3',
            leaveT: '0.15',
            enterD: '0',
            leaveD: '0' } }),
        transition('* => scrollRight', rotateA('+'), { params: {
            enterT: '0.3',
            leaveT: '0.15',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollRight => *', rotateA('-'), { params: {
            enterT: '0.3',
            leaveT: '0.15',
            enterD: '0',
            leaveD: '0' } }),
        transition('scrollLeft => *', rotateA('+'), { params: {
            enterT: '0.3',
            leaveT: '0.15',
            enterD: '0',
            leaveD: '0' } }),
        transition('* <=> *', rotateA('+'), { params: {
            enterT: '0.3',
            leaveT: '0.15',
            enterD: '0',
            leaveD: '0' } }),
      ]);
    }

  }

}
