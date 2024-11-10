// import { title } from "process";
import { charObj } from "../stageEnnemy";
// import stageCheck from '../stageEnnemy';

function titleScreen(): string[] {
  const c = require('ansi-colors');
  const prompt = require('prompt-sync')();
  const icon: string = '\r\n                                                                                                                                                                                \r\n                                                                                       \u2588\u2588\u2588                                                                                      \r\n                                                                                      \u2588\u2588\u2588\u2588\u2588\u2588                                                                                    \r\n                                                                                    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                                   \r\n                                                                                  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                                  \r\n                                                                                 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                                \r\n                \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                   \r\n                \u2588\u2588           \u2588\u2588    \u2588\u2588    \u2588\u2588         \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588          \u2588\u2588         \u2588\u2588          \u2588    \u2588\u2588    \u2588         \u2588\u2588\u2588    \u2588\u2588          \u2588\u2588          \u2588\u2588                   \r\n                \u2588\u2588 \u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588 \u2588\u2588    \u2588\u2588    \u2588\u2588 \u2588\u2588\u2588     \u2588\u2588\u2588  \u2588    \u2588\u2588\u2588\u2588\u2588 \u2588\u2588    \u2588\u2588\u2588\u2588  \u2588          \u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588    \u2588\u2588\u2588\u2588    \u2588     \u2588\u2588\u2588  \u2588\u2588                   \r\n                \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588          \u2588\u2588       \u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588 \u2588       \u2588\u2588\u2588     \u2588\u2588     \u2588       \u2593\u2588\u2588\u2588          \u2588    \u2588\u2588\u2588    \u2588\u2588 \u2588\u2588             \u2588        \u2588\u2588\u2588                    \r\n                   \u2588\u2588    \u2588\u2588  \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588 \u2588\u2588    \u2588\u2588    \u2588\u2588\u2591  \u2588     \u2588\u2588\u2588  \u2588    \u2588\u2588\u2588   \u2588\u2588    \u2588\u2588\u2588\u2588  \u2588    \u2588\u2593    \u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588    \u2588\u2588\u2588\u2588    \u2588     \u2588\u2588\u2588\u2588                      \r\n                  \u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588         \u2588\u2588   \u2588\u2588\u2588         \u2588          \u2588\u2588         \u2588\u2588          \u2588    \u2588\u2588\u2588   \u2588        \u2591\u2588\u2588\u2588    \u2588\u2588         \u2588\u2588\u2588     \u2588\u2588                        \r\n                  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                        \r\n                                                                     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                    \r\n                                                                   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                  \r\n                                                                  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                 \r\n                                                                \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                               \r\n                                                               \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                              \r\n                                                   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                          \r\n                                                   \u2588\u2593            \u2588\u2588            \u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588          \u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2592\u2588                                                          \r\n                                                   \u2588\u2593   \u2588\u2588\u2588     \u2588\u2588\u2588      \u2588\u2588\u2588   \u2588\u2588\u2588     \u2588\u2588    \u2588\u2588    \u2588\u2588\u2588    \u2588\u2588 \u2588\u2588      \u2588\u2588                                                         \r\n                                                   \u2588\u2593 \u2588\u2588\u2588\u2588     \u2588\u2588 \u2588\u2588     \u2588\u2588\u2588\u2588  \u2588\u2588\u2588     \u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588    \u2588\u2588\u2588        \u2588\u2588                                                        \r\n                                                   \u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588 \u2588\u2588\u2588\u2588\u2591    \u2588\u2588\u2588\u2588     \u2588\u2588   \u2588    \u2588\u2588\u2588\u2588                                                      \r\n                                                      \u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588\u2591     \u2588  \u2588\u2588 \u2588\u2588\u2588     \u2588\u2588\u2588\u2588  \u2588\u2591    \u2588\u2588\u2588\u2588     \u2588         \u2588\u2588\u2588\u2588\u2588                                                     \r\n                                                    \u2588\u2588\u2588     \u2588\u2588\u2588   \u2588      \u2588\u2588\u2588\u2588  \u2588\u2588\u2588     \u2588\u2588\u2588   \u2588\u2588    \u2588\u2588\u2588     \u2588\u2588          \u2588\u2588\u2588\u2588\u2588\u2588                                                   \r\n                                                   \u2588\u2588\u2588     \u2588\u2588     \u2588      \u2588\u2588\u2588   \u2588\u2588\u2588     \u2588\u2588    \u2588\u2591    \u2588      \u2588\u2588   \u2588\u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588                                                  \r\n                                                 \u2588\u2588\u2588\u2588                          \u2588                       \u2588\u2588\u2588      \u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588                                                \r\n                                                \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                               \r\n                                              \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                            \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                             \r\n                                             \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                            \r\n                \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588              \r\n                \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588   \u2588\u2588          \u2588    \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588         \u2588\u2588   \u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2593         \u2588           \u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588         \u2592\u2588              \r\n                 \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588    \u2588   \u2588\u2588\u2588    \u2588\u2588    \u2588    \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588 \u2588\u2588  \u2588\u2588    \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588      \u2588\u2588\u2588    \u2588\u2588\u2588\u2588  \u2588 \u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588    \u2591\u2588   \u2588\u2588    \u2588\u2588\u2588\u2588 \u2592\u2588              \r\n                 \u2588\u2588          \u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588         \u2588\u2588    \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588\u2588  \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588\u2588              \r\n                 \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588 \u2588\u2588    \u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588    \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588  \u2588\u2588    \u2588\u2588\u2591\u2588 \u2588\u2588  \u2588\u2588    \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588        \u2588\u2588 \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588   \u2588    \u2588\u2588 \u2588 \u2591\u2588              \r\n                \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588    \u2588\u2593    \u2588\u2588        \u2588\u2588\u2588\u2588         \u2588\u2588         \u2588\u2588   \u2588\u2588         \u2588\u2588   \u2588\u2588\u2588    \u2588          \u2588\u2588\u2588\u2588\u2592   \u2588\u2588\u2588\u2588\u2588\u2588          \u2588         \u2592\u2588              \r\n               \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588              \r\n                                 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                \r\n                                                                                                                                                                                \r\n                                                                                                                                                                                ';

  while (true) {
    console.clear();
    console.log(icon);
    console.log('\n                                                         1.New Game                                            2.Quit\n');
    const menu = prompt('').toLowerCase();
    
    if (menu === 'new game' || menu === 'new' || menu === '1') {
      console.log('\n                                                                            Chose your difficulty level :\n');
      console.log('\n                                                     Normal                   Hard(Recommended)                Insane\n');
      const difficulty: string = prompt('').toLowerCase();
      if (difficulty === 'normal' || difficulty === 'hard' || difficulty === 'insane') {
        console.log('\n                                                                         Chose your number of fights :\n');
        console.log('\n                                                               10              20              50              100\n');
        const maxFloor: string = prompt('').toLowerCase();
        if (maxFloor === '10' || maxFloor === '20' || maxFloor === '50' || maxFloor === '100') {
          return [difficulty, maxFloor];
        } else {
          prompt('Please chose a valid number of fights.');
        }
      } else {
        prompt('Please chose a valid level of difficulty.');
      }
    } else if (menu === 'quit' || menu === '2'){
      console.log('\nAre you sure to leave the game now?\n1. Yes    2. No');
      const choice = prompt('> ').toLowerCase();
      if (choice === 'yes' || choice === '1') {
        console.clear();
        process.exit();
      } else if (choice === 'no' || choice === '2') {
      }
    } else {
      console.log('\nThat is not a valid option');
    }
  }
}

function diffEnnemy(ennemy : charObj, difficulty : string): charObj {
let multiplier: number = 0;
  if (difficulty === 'normal') {
    multiplier = 1;
  } else if (difficulty === 'hard') {
    multiplier = 1.5;
  } else if (difficulty === 'insane') {
    multiplier = 2;
  }
  for(let i of Object.keys(ennemy)) {
    if (typeof ennemy[i] === "number") {
      ennemy[i] = ennemy[i] * multiplier;
    }
  }
  return ennemy;
}

export { titleScreen, diffEnnemy };