import typescript from '@wessberg/rollup-plugin-ts'

export default {
  input: ['src/entry1.ts', 'src/entry2.ts'],
  output: {
    dir: 'build',
  },
  plugins: [
    typescript({
      tsconfig: {
        declaration: true
      }
    }),
  ],
}
