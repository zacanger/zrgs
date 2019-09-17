const argIn = (arg) => (opts) => opts.includes(arg)
const handleAbbrev = (s) => [`--${s}`, `-${s}`, `-${s.charAt(0)}`]
const args = process.argv.slice(2)
const first = args[0]
const incl = argIn(first)
const hasFlag = (flag) => incl(handleAbbrev(flag))

module.exports = {
  hasFlag,
  args
}
