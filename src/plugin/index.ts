/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-epics MoBrix-engine-plugin-epics} init file
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-plugin-epics
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { EpicsPlugin } from "./types";

import { combineEpics, createEpicMiddleware } from "redux-observable";
import { createMoBrixEnginePlugin } from "mobrix-engine-tools";

/**
 * Use {@link https://redux-observable.js.org/ redux-observable} epics inside MoBrix-engine
 *
 * @returns `epics` plugin
 *
 * @example <caption> Basic scenario - custom epic inside MoBrix-engine config file .</caption>
 *
 * const epicsPlugin = require("mobrix-engine-plugin-epics");
 *
 * const { createMoBrixEngineAction } = require("mobrix-engine-tools");
 *
 * const customActionOne = createMoBrixEngineAction("@@custom/action-one");
 *
 * const customActionTwo = createMoBrixEngineAction("@@custom/action-two");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [epicsPlugin],
 *   epics: [
 *     (actions$) =>
 *       actions$.pipe(filter(customActionOne), mapTo(customActionTwo)),
 *   ],
 * };
 *
 * module.exports = { config };
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-epics
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
const epicsPlugin: EpicsPlugin = createMoBrixEnginePlugin("epics", () => {
  const epicMiddleware: any = createEpicMiddleware();

  return {
    create: (config) => ({
      field: "epics",
      content: config.epics || [],
    }),
    middlewares: (config) => ({
      legacyMiddlewares: [epicMiddleware],
    }),
    after: ({ config }) => {
      epicMiddleware.run(combineEpics(...config.epics));
      return config;
    },
  };
});

export default epicsPlugin;
