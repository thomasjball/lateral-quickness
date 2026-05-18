export type RadioChannel = 0 | 1
export type AnchorMode = 0 | 1
export type RunningMode = 0 | 1

export type StateName =
  | "RunnerIdleChannel0"
  | "RunnerIdleChannel1"
  | "RunnerActiveChannel0"
  | "RunnerActiveChannel1"
  | "AnchorChannel0"
  | "AnchorChannel1"

export interface StateInvariant {
  name: StateName
  anchor: AnchorMode
  running: RunningMode
  radio_channel: RadioChannel
  description: string
  enabledActions: string[]
}

export const stateInvariants: Record<StateName, StateInvariant> = {
  RunnerIdleChannel0: {
    name: "RunnerIdleChannel0",
    anchor: 0,
    running: 0,
    radio_channel: 0,
    description: "Runner mode idle on channel 0, waiting for logo press to start a run or Button A to switch to anchor mode.",
    enabledActions: ["LogoTouch", "ButtonA", "ButtonB"],
  },
  RunnerIdleChannel1: {
    name: "RunnerIdleChannel1",
    anchor: 0,
    running: 0,
    radio_channel: 1,
    description: "Runner mode idle on channel 1, waiting for logo press to start a run or Button A to switch to anchor mode.",
    enabledActions: ["LogoTouch", "ButtonA", "ButtonB"],
  },
  RunnerActiveChannel0: {
    name: "RunnerActiveChannel0",
    anchor: 0,
    running: 1,
    radio_channel: 0,
    description: "Runner mode active during a timed run on channel 0. Counts strong anchor pulses and may transition channel on each signal.",
    enabledActions: ["ReceiveStrongSignal", "ButtonB"],
  },
  RunnerActiveChannel1: {
    name: "RunnerActiveChannel1",
    anchor: 0,
    running: 1,
    radio_channel: 1,
    description: "Runner mode active during a timed run on channel 1. Counts strong anchor pulses and may transition channel on each signal.",
    enabledActions: ["ReceiveStrongSignal", "ButtonB"],
  },
  AnchorChannel0: {
    name: "AnchorChannel0",
    anchor: 1,
    running: 0,
    radio_channel: 0,
    description: "Anchor mode on channel 0, broadcasting pulses and displaying the current channel.",
    enabledActions: ["RadioPulseBroadcast", "ButtonAB", "ButtonB"],
  },
  AnchorChannel1: {
    name: "AnchorChannel1",
    anchor: 1,
    running: 0,
    radio_channel: 1,
    description: "Anchor mode on channel 1, broadcasting pulses and displaying the current channel.",
    enabledActions: ["RadioPulseBroadcast", "ButtonAB", "ButtonB"],
  },
}
