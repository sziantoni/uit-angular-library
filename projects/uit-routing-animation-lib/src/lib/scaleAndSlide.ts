import {
  trigger,
  transition,
  style,
  query,
  animate,
  keyframes, sequence, AnimationTriggerMetadata, animation,
} from '@angular/animations';

export const scaleAndSlideEnterParam = animation([
  query(':enter', [
    style({
      opacity: 0,
      position: 'fixed',
      transformStyle: 'preserve-3d',
    }),
  ], {optional: true})
]);

export const scaleAndSlideLeaveParam = animation([
  query(':enter', [
    style({
      opacity: 0,
      position: 'fixed',
      transformStyle: 'preserve-3d',
    }),
  ], {optional: true})
]);

export const scaleAndSlideLeavePart = animation([
  query(':leave', [
    animate('{{leaveTS}}s {{leaveDS}}s ease-out', keyframes([
      style({ opacity: 1 , transform: 'scale(1)', offset: 0}),
      style({opacity: 1, transform: 'scale(.7)', offset: 1 })])),
    animate('{{leaveTSL}}s {{leaveDSL}}s ease-out', keyframes([
      style({opacity: 1, transform: 'scale(.7) translateX({{oppSAS}}0%)', offset: 0 }),
      style({opacity: 0, transform: 'scale(.7) translateX({{oppSAS}}300%)',  offset: 1 })
    ])),
    style({position: 'fixed'})
  ], {optional: true})
]);

export const scaleAndSlideEnterPart = animation([
  query(':enter', [
    style({opacity: 0, transform: 'scale(.7) translateX({{dirSAS}}200%)' }),
    animate('{{enterTSL}}s {{enterDSL}}s ease-out',
      style({opacity: 1, transform: 'scale(.7) translateX(0%)', position: 'relative'})
    ),
    style({opacity: 1, transform: 'scale(.7)', position: 'relative'}),
    animate('{{enterTS}}s {{enterDS}}s ease-out',
      style({ opacity: 1 , transform: 'scale(1)', position: 'relative'})
    ),
  ], {optional: true})
]);


function scale(direction: string) {
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
        transformStyle: 'preserve-3d',
      }),
    ], {optional: true}),
    sequence([
      query(':leave', [
        animate('{{leaveTS}}s {{leaveDS}}s ease-out', keyframes([
          style({ opacity: 1 , transform: 'scale(1)', offset: 0}),
          style({opacity: 1, transform: 'scale(.7)', offset: 1 })])),
        animate('{{leaveTSL}}s {{leaveDSL}}s ease-out', keyframes([
          style({opacity: 1, transform: 'scale(.7) translateX(' + [opposite] + '0%)', offset: 0 }),
          style({opacity: 0, transform: 'scale(.7) translateX(' + [opposite] + '300%)',  offset: 1 })
        ])),
        style({position: 'fixed'})
      ], {optional: true}),
      query(':enter', [
        style({opacity: 0, transform: 'scale(.7) translateX(' + [direction] + '200%)' }),
        animate('{{enterTSL}}s {{enterDSL}}s ease-out',
          style({opacity: 1, transform: 'scale(.7) translateX(0%)', position: 'relative'})
        ),
        style({opacity: 1, transform: 'scale(.7)', position: 'relative'}),
        animate('{{enterTS}}s {{enterDS}}s ease-out',
          style({ opacity: 1 , transform: 'scale(1)', position: 'relative'})
        ),
      ], {optional: true})]),
  ];
}


/*MEDIUM MEDIUM */
export function scaleAndSlide(): AnimationTriggerMetadata {
  return trigger('scaleAndSlide', [
    transition('* => scrollLeft', scale('-'), { params: {
        enterTS: '0.3',
        leaveTS: '0.4',
        enterDS: '0',
        leaveDS: '0',
        enterTSL: '0.8',
        leaveTSL: '0.9',
        enterDSL: '0',
        leaveDSL: '0'} }),
    transition('* => scrollRight', scale('+'), { params: {
        enterTS: '0.3',
        leaveTS: '0.4',
        enterDS: '0',
        leaveDS: '0',
        enterTSL: '0.8',
        leaveTSL: '0.9',
        enterDSL: '0',
        leaveDSL: '0' } }),
    transition('scrollRight => *', scale('-'), { params: {
        enterTS: '0.3',
        leaveTS: '0.4',
        enterDS: '0',
        leaveDS: '0',
        enterTSL: '0.8',
        leaveTSL: '0.9',
        enterDSL: '0',
        leaveDSL: '0' } }),
    transition('scrollLeft => *', scale('+'), { params: {
        enterTS: '0.3',
        leaveTS: '0.4',
        enterDS: '0',
        leaveDS: '0',
        enterTSL: '0.8',
        leaveTSL: '0.9',
        enterDSL: '0',
        leaveDSL: '0'} }),
    transition('* <=> *', scale('+'), { params: {
        enterTS: '0.3',
        leaveTS: '0.4',
        enterDS: '0',
        leaveDS: '0',
        enterTSL: '0.8',
        leaveTSL: '0.9',
        enterDSL: '0',
        leaveDSL: '0' } }),
  ]);
}

export function scaleAndSlide_customAll(direction: string, speedScale: string, speedSlide: string): AnimationTriggerMetadata {
  if (speedScale !== 'low' && speedScale !== 'medium' && speedScale !== 'high') {
    throw new Error(
      'invalid speedScale in scaleAndSlide_customAll, maybe you wanted to write: { low , medium, high }'
    );
  }else if (direction !== 'left' && direction !== 'right' ){
    throw new Error(
      'invalid direction in scaleAndSlide_customAll, maybe you wanted to write: { left , right }'
    );
  }else if (speedSlide !== 'low' && speedSlide !== 'medium' && speedSlide !== 'high') {
    throw new Error(
      'invalid speedSlide in scaleAndSlide_customAll, maybe you wanted to write: { low , medium, high }'
    );
  }else {
  switch (direction) {
    case('left'): {
      switch (speedScale) {
        case ('low') : {
          switch (speedSlide) {
            case ('low'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.6',
                    leaveTS: '0.8',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.7',
                    leaveTSL: '0.8',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('medium'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.6',
                    leaveTS: '0.8',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.8',
                    leaveTSL: '0.9',
                    enterDSL: '0',
                    leaveDSL: '0'} }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('high'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.5',
                    leaveTS: '0.7',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.4',
                    leaveTSL: '0.5',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
          }
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('medium') : {
          switch (speedSlide) {
            case ('low'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.3',
                    leaveTS: '0.4',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '1.2',
                    leaveTSL: '1.2',
                    enterDSL: '0',
                    leaveDSL: '0'} }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('medium'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.3',
                    leaveTS: '0.4',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.8',
                    leaveTSL: '0.9',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('high'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.3',
                    leaveTS: '0.4',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.4',
                    leaveTSL: '0.5',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
          }
      }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('high') : {
          switch (speedSlide) {
            case ('low'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.15',
                    leaveTS: '0.2',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '1.2',
                    leaveTSL: '1.2',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('medium'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.15',
                    leaveTS: '0.2',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.8',
                    leaveTSL: '0.9',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('high'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('-'), { params: {
                    enterTS: '0.15',
                    leaveTS: '0.2',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.4',
                    leaveTSL: '0.5',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
          }
        }

    }
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case('right'): {
      switch (speedScale) {
        case ('low') : {
          switch (speedSlide) {
            case ('low'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.6',
                    leaveTS: '0.8',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '1.2',
                    leaveTSL: '1.2',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('medium'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.6',
                    leaveTS: '0.8',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.3',
                    leaveTSL: '0.4',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('high'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.6',
                    leaveTS: '0.8',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.15',
                    leaveTSL: '0.2',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
          }
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('medium') : {
          switch (speedSlide) {
            case ('low'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.3',
                    leaveTS: '0.4',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.7',
                    leaveTSL: '0.8',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('medium'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.3',
                    leaveTS: '0.4',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.3',
                    leaveTSL: '0.4',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('high'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.3',
                    leaveTS: '0.4',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.15',
                    leaveTSL: '0.2',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
          }
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('high') : {
          switch (speedSlide) {
            case ('low'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.15',
                    leaveTS: '0.2',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.7',
                    leaveTSL: '0.8',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('medium'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.15',
                    leaveTS: '0.2',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.3',
                    leaveTSL: '0.4',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
            // tslint:disable-next-line:no-switch-case-fall-through
            case ('high'): {
              return trigger('scaleAndSlide', [
                transition('* <=> *', scale('+'), { params: {
                    enterTS: '0.15',
                    leaveTS: '0.2',
                    enterDS: '0',
                    leaveDS: '0',
                    enterTSL: '0.15',
                    leaveTSL: '0.2',
                    enterDSL: '0',
                    leaveDSL: '0' } }),
              ]);
            }
          }
        }

      }
    }
  }}}

export function scaleAndSlide_customSpeed(speedScale: string, speedSlide: string): AnimationTriggerMetadata {
  if (speedScale !== 'low' && speedScale !== 'medium' && speedScale !== 'high') {
    throw new Error(
      'invalid speedScale in scaleAndSlide_customSpeed, maybe you wanted to write: { low , medium, high }'
    );
  }else if (speedSlide !== 'low' && speedSlide !== 'medium' && speedSlide !== 'high') {
    throw new Error(
      'invalid speedSlide in scaleAndSlide_customSpeed, maybe you wanted to write: { low , medium, high }'
    );
  }else {
  switch (speedScale) {
    case ('low') : {
      switch (speedSlide) {
        case ('low'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('medium'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.6',
                leaveTS: '0.8',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('high'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.5',
                leaveTS: '0.7',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.5',
                leaveTS: '0.7',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.5',
                leaveTS: '0.7',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.5',
                leaveTS: '0.7',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.5',
                leaveTS: '0.7',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
      }
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('medium') : {
      switch (speedSlide) {
        case ('low'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('medium'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('high'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.3',
                leaveTS: '0.4',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
      }
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case ('high') : {
      switch (speedSlide) {
        case ('low'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '1.2',
                leaveTSL: '1.2',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('medium'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.8',
                leaveTSL: '0.9',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
        // tslint:disable-next-line:no-switch-case-fall-through
        case ('high'): {
          return trigger('scaleAndSlide', [
            transition('* => scrollLeft', scale('-'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* => scrollRight', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollRight => *', scale('-'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
            transition('scrollLeft => *', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0'} }),
            transition('* <=> *', scale('+'), { params: {
                enterTS: '0.15',
                leaveTS: '0.2',
                enterDS: '0',
                leaveDS: '0',
                enterTSL: '0.4',
                leaveTSL: '0.5',
                enterDSL: '0',
                leaveDSL: '0' } }),
          ]);
        }
      }
    }

  }
}}



