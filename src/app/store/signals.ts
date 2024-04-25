import {signal, WritableSignal} from "@angular/core";

export const showLoader$: WritableSignal<boolean> = signal(false);
export const showToast$: WritableSignal<any> = signal(undefined, {equal: () => false});

export const register$: WritableSignal<any> = signal(undefined, {equal: () => false});
export const login$: WritableSignal<any> = signal(undefined, {equal: () => false});
export const signInWithGoogle$: WritableSignal<any> = signal(undefined, {equal: () => false});
export const signout$: WritableSignal<any> = signal(undefined, {equal: () => false});
