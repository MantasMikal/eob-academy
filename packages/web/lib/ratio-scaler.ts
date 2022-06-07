// Expects target and native to be objects containing
// width and height keys.

type NativeSize = {
  width: number
  height: number
}

type TargetSize = {
  width?: number
  height?: number
}

const ratioScaler = (target: TargetSize, native: NativeSize) => {
  if (target.width && target.height) return target
  if (!target.width && !target.height) return native

  let ratio = 0

  if (target.width && !target.height) {
    ratio = target.width / native.width
  } else if (!target.width && target.height) {
    ratio = target.height / native.height
  }

  return {
    width: native.width * ratio,
    height: native.height * ratio,
    ratio: ratio
  }
}

export default ratioScaler
