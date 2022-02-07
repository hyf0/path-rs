#![deny(clippy::all)]

use napi_derive::napi;

#[cfg(all(
  any(windows, unix),
  target_arch = "x86_64",
  not(target_env = "musl"),
  not(debug_assertions)
))]
#[global_allocator]
static ALLOC: mimalloc::MiMalloc = mimalloc::MiMalloc;
use nodejs_path as path
;
#[napi]
pub fn normalize(input: String) -> String {
  path::normalize(&input)
}


#[napi]
pub fn resolve(inputs: Vec<String>) -> String {
  path::resolve_impl(&inputs)
}

#[napi]
pub fn relative(a: String, b: String) -> String {
  path::relative(&a, &b)
}
