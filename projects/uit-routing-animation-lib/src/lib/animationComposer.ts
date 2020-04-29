import {stdbLeavePart, stdbLeaveParams, stdbEnterPart, stdbEnterParams} from './slideTitleDownBlocks';
import {flipLeavePart, flipEnterPart, flipEnterParams, flipLeaveParams} from './flip';
import {fadeBackEnterPart, fadeBackLeavePart, fadeBackEnterParams, fadeBackLeaveParam} from './fadeBack';
import {surpriseEnterPart, surpriseLeaveParam, surpriseLeavePart, surpriseEnterParam} from './surprise';
import {rotateLeavePart, rotateLeaveParam, rotateEnterParam, rotateEnterPart} from './rotate';
import {slideEnterPart, slideLeavePart, slideEnterParam, slideLeaveParam} from './slide';
import {moveUpLeavePart, moveUpEnterParam, moveUpLeaveParam, moveUpEnterPart} from './moveUp';
import {AnimationTriggerMetadata, sequence, transition, trigger, useAnimation} from '@angular/animations';

let leaveP;
let leaveA;
let enterP;
let enterA;

// flip, fadeback, stdb, surprise
export function animationComposerSimple(
  leaveAnimation: string,
  leaveSpeed: string,
  enterAnimation: string,
  enterSpeed: string):
  AnimationTriggerMetadata {
    switch (leaveAnimation) {
    case('flip'): {
      leaveP = flipLeaveParams;
      leaveA = flipLeavePart;
      break;
    }
    case('fadeBack'): {
      leaveP = fadeBackLeaveParam;
      leaveA = fadeBackLeavePart;
      break;
    }
    case('surprise'): {
      leaveP = surpriseLeaveParam;
      leaveA = surpriseLeavePart;
      break;
    }
    case('slideTitleDownBlocks'): {
      leaveP = stdbLeaveParams;
      leaveA = stdbLeavePart;
      break;
    }
  }
    switch (enterAnimation) {
      case('flip'): {
        enterP = flipEnterParams;
        enterA = flipEnterPart;
        break;
      }
      case('fadeBack'): {
        enterP = fadeBackEnterParams;
        enterA = fadeBackEnterPart;
        break;
      }
      case('surprise'): {
        enterP = surpriseEnterParam;
        enterA = surpriseEnterPart;
        break;
      }
      case('slideTitleDownBlocks'): {
        enterP = stdbEnterParams;
        enterA = stdbEnterPart;
        break;
      }
    }
    switch (leaveSpeed) {
      case('low'): {
        switch (enterSpeed) {
          case('low'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                  useAnimation(leaveP),
                  useAnimation(enterP),
                  sequence([
                    useAnimation(leaveA),
                    useAnimation(enterA)
              ])
              ], {params: {
                  enterT: '1',
                  leaveT: '1',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '1',
                  leaveTR: '1',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('medium'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.6',
                  leaveT: '1',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.6',
                  leaveTR: '1',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('high'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.4',
                  leaveT: '1',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.4',
                  leaveTR: '1',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
        }
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case('medium'): {
        switch (enterSpeed) {
          case('low'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '1',
                  leaveT: '0.6',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '1',
                  leaveTR: '0.6',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('medium'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.6',
                  leaveT: '0.6',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.6',
                  leaveTR: '0.6',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('high'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.4',
                  leaveT: '0.6',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.4',
                  leaveTR: '0.6',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
        }
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case('high'): {
        switch (enterSpeed) {
          case('low'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '1',
                  leaveT: '0.4',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '1',
                  leaveTR: '0.4',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('medium'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.6',
                  leaveT: '0.4',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.6',
                  leaveTR: '0.4',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
          case('high'): {
            return trigger('composeAnimation', [
              transition('* <=> *', [
                useAnimation(leaveP),
                useAnimation(enterP),
                sequence([
                  useAnimation(leaveA),
                  useAnimation(enterA)
                ])
              ], {params: {
                  enterT: '0.4',
                  leaveT: '0.4',
                  enterD: '0',
                  leaveD: '0',
                  enterTR: '0.4',
                  leaveTR: '0.4',
                  enterDR: '0',
                  leaveDR: '0'} })
            ]);
          }
        }
      }

    }
}

let dirRc = '';
let tRc = '';
let dirMc = '';
let dirSc = '';

// flip, fadeback, stdb, surprise, rotate, moveUp, slide
export function animationComposerComplex(
  leaveAnimation: string,
  leaveSpeed: string,
  directionLeave: string,
  enterAnimation: string,
  enterSpeed: string,
  directionEnter: string,
  ):
  AnimationTriggerMetadata {
  switch (leaveAnimation) {
    case('flip'): {
      leaveP = flipLeaveParams;
      leaveA = flipLeavePart;
      break;
    }
    case('fadeBack'): {
      leaveP = fadeBackLeaveParam;
      leaveA = fadeBackLeavePart;
      break;
    }
    case('surprise'): {
      leaveP = surpriseLeaveParam;
      leaveA = surpriseLeavePart;
      break;
    }
    case('slideTitleDownBlocks'): {
      leaveP = stdbLeaveParams;
      leaveA = stdbLeavePart;
      break;
    }
    case('rotate'): {
      leaveP = rotateLeaveParam;
      leaveA = rotateLeavePart;
      break;
    }
    case('moveUp'): {
      leaveP = moveUpLeaveParam;
      leaveA = moveUpLeavePart;
      break;
    }
    case('slide'): {
      leaveP = slideLeaveParam;
      leaveA = slideLeavePart;
      break;
    }
  }
  switch (enterAnimation) {
    case('flip'): {
      enterP = flipEnterParams;
      enterA = flipEnterPart;
      break;
    }
    case('fadeBack'): {
      enterP = fadeBackEnterParams;
      enterA = fadeBackEnterPart;
      break;
    }
    case('surprise'): {
      enterP = surpriseEnterParam;
      enterA = surpriseEnterPart;
      break;
    }
    case('slideTitleDownBlocks'): {
      enterP = stdbEnterParams;
      enterA = stdbEnterPart;
      break;
    }
    case('rotate'): {
      enterP = rotateEnterParam;
      enterA = rotateEnterPart;
      break;
    }
    case('moveUp'): {
      enterP = moveUpEnterParam;
      enterA = moveUpEnterPart;
      break;
    }
    case('slide'): {
      enterP = slideEnterParam;
      enterA = slideEnterPart;
      break;
    }
  }
  if ((enterA === rotateEnterPart) && (directionEnter === 'right')){
    dirRc = '-';
    tRc = 'right';
  }else if ((enterA === rotateEnterPart) && directionEnter === 'left') {
    dirRc = '+';
    tRc = 'left';
    }else if ((leaveA === rotateLeavePart) && (directionLeave === 'right')){
    dirRc = '-';
    tRc = 'right';
  }else if ((leaveA === rotateLeavePart) && directionLeave === 'left') {
    dirRc = '+';
    tRc = 'left';
  }

  if ((enterA === moveUpEnterPart) && directionEnter === 'right'){
    dirMc = '+';
  }else if ((enterA === moveUpEnterPart) && directionEnter === 'left') {
    dirMc = '-';
  }else if ((leaveA === moveUpLeavePart) && directionLeave === 'right'){
    dirMc = '+';
  }else if ((leaveA === moveUpLeavePart) && directionLeave === 'left') {
    dirMc = '-';
  }

  if ((enterA === slideEnterPart) && directionEnter === 'bottom'){
    dirSc = '-';
  }else if ((enterA === slideEnterPart) && directionEnter === 'top') {
    dirSc = '+';
  }else if ((leaveA === slideLeavePart) && directionLeave === 'bottom'){
    dirSc = '-';
  }else if ((leaveA === slideLeavePart) && directionLeave === 'top') {
    dirSc = '+';
  }

  switch (leaveSpeed) {
    case('low'): {
      switch (enterSpeed) {
        case('low'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '1',
                leaveT: '1',
                enterD: '0',
                leaveD: '0',
                enterTR: '1',
                leaveTR: '1',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('medium'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '0.6',
                leaveT: '1',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.6',
                leaveTR: '1',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('high'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '0.4',
                leaveT: '1',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.4',
                leaveTR: '1',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
      }
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case('medium'): {
      switch (enterSpeed) {
        case('low'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '1',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0',
                enterTR: '1',
                leaveTR: '0.6',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('medium'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '0.6',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.6',
                leaveTR: '0.6',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('high'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '0.4',
                leaveT: '0.6',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.4',
                leaveTR: '0.6',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
      }
    }
    // tslint:disable-next-line:no-switch-case-fall-through
    case('high'): {
      switch (enterSpeed) {
        case('low'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '1',
                leaveT: '0.4',
                enterD: '0',
                leaveD: '0',
                enterTR: '1',
                leaveTR: '0.4',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('medium'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '0.6',
                leaveT: '0.4',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.6',
                leaveTR: '0.4',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
        case('high'): {
          return trigger('composeAnimation', [
            transition('* <=> *', [
              useAnimation(leaveP),
              useAnimation(enterP),
              sequence([
                useAnimation(leaveA),
                useAnimation(enterA)
              ])
            ], {params: {
                dirM: dirMc,
                dirR: dirRc,
                dirS: dirSc,
                tr: tRc,
                enterT: '0.4',
                leaveT: '0.4',
                enterD: '0',
                leaveD: '0',
                enterTR: '0.4',
                leaveTR: '0.4',
                enterDR: '0',
                leaveDR: '0'} })
          ]);
        }
      }
    }

  }
 }

