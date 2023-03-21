import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function failureNameNotify(contact) {
  Notify.failure(`${contact.name} is already in contacts`, {
    timeout: 2000,
    cssAnimationStyle: 'from-right',
  });
}
export function failureNumberNotify(contact) {
  Notify.failure(`This is ${contact.name} phone number`, {
    timeout: 2000,
    cssAnimationStyle: 'from-right',
  });
}
export function successNotify(contact) {
  Notify.success(`${contact.name} add to the contacts`, {
    timeout: 2000,
    cssAnimationStyle: 'from-right',
  });
}

export function successDelNotify(contact) {
  Notify.success(`${contact.name} delete from the contacts`, {
    timeout: 2000,
    cssAnimationStyle: 'from-right',
  });
}

export function errorNotify(error) {
  Notify.failure(`${error}`, {
    timeout: 2000,
    cssAnimationStyle: 'from-right',
  });
}
