/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-epics MoBrix-engine-plugin-epics} type definitions file
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-epics
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { Epic } from "redux-observable";
import { MoBrixEnginePlugin } from "mobrix-engine-types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-epics MoBrix-engine-plugin-epics} config settings type definition
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-epics
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export interface EpicsPluginSettings {
  epics?: Epic[];
}

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-epics MoBrix-engine-plugin-epics} type definition
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine-plugin-epics
 *
 * @see https://github.com/CianciarusoCataldo/mobrix-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export type EpicsPlugin = MoBrixEnginePlugin<EpicsPluginSettings>;
